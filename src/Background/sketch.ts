import * as p5 from "p5";

let particles: Array<Particle> = [];
let width  = (p5: p5) => p5.windowWidth;
let height = (p5: p5) => p5.windowHeight;
let mouse: Particle

let elem: p5.Element;

export async function setup(p5: p5, canvasRef: Element) {
    if (elem !== undefined) 
        return;
    p5.frameRate(120);
    elem = p5.createCanvas(width(p5), 900).parent(canvasRef);
    mouse = new Particle(0, 0, 0, 0);
    for (let i = 0; i < 125; i++) {
        particles.push(new Particle(
            Math.random() * width(p5),
            Math.random() * height(p5),
            (Math.random() - 0.5) / 2,
            (Math.random() - 0.5) / 2
        ));
    }
    particles.push(mouse);
    resized(p5);
};

let waves: Array<Wave> = [];

export async function onDrag(p5: p5) {
    if (p5.frameCount % 5 === 0)
        onClick(p5);
}

export async function onClick(p5: p5) {
    for (let i = 0; i < 3; i++)
        waves.push(new Wave(p5, p5.mouseX, p5.mouseY, i * 10, 10));
}

export async function draw(p5: p5) {
    p5.clear();
    p5.background(p5.color("rgba(0,0,0,0.4)"))
    particles.forEach(p => {
        p5.fill(p5.color(`hsl(${p.hue += 2}, 100%, 60%)`));
        // Rotate hue
        p.hue %= 360;
        p.connect(p5, particles);
        p5.circle(p.x, p.y, 3);
        
        p.x = (p.x + p.velX * 2) % width(p5);
        p.y = (p.y + p.velY * 2) % height(p5);

        if (p.x < 0) p.x = width(p5);
        if (p.y < 0) p.y = height(p5);

    });
    mouse.x = p5.mouseX;
    mouse.y = p5.mouseY;
    // Wave animations
    ripple();
}

async function ripple() {
    waves.forEach(w => {
        if (!w.isDead()) 
            w.update();
    });
}

export function resized(p5: p5) {
    p5.resizeCanvas(width(p5), height(p5));
}

class Particle {
    public hue: number;

    constructor(public x: number, public y: number, public velX: number, public velY: number) {
        this.hue = Math.floor(170 + Math.random() * 60);
    }

    private counter: number = 0;
    public connect(p5: p5, particles: Array<Particle>) {
        particles.forEach(p => {
            if (p === this) return;
            let dist = p5.dist(this.x, this.y, p.x, p.y);
            if (dist < 150) {
                let alpha = 150 - dist;
                p5.stroke(
                    Math.max(100, Math.sin((this.x + p.y) / 125) * 255), 
                    Math.max(100, Math.cos((p.y - this.x + p.x | this.y) / 110) * 255), 
                    Math.max(100, Math.cos(Math.sin(this.y - p.x) / 100) * 255), 
                    alpha
                );
                p5.line(this.x, this.y, p.x, p.y);
            }
        });
        this.counter += this.counter % 500000;        
    }
}

class Wave {
    private p5: p5;
    private size: number;
    private speed: number;

    constructor(p5: p5, public x: number, public y: number, size: number, speed: number) {
        this.p5 = p5;
        this.size = size;
        this.speed = speed;
    }

    public update() {
        let p5: p5 = this.p5;
        p5.push();
        p5.noFill();
        p5.stroke(p5.color(`hsla(${(this.size / 2) % 360}, 100%, 50%, ${1 - this.size / 500})`));
        p5.circle(this.x, this.y, this.size);
        p5.pop();
        this.size += this.speed;
    }

    public isDead() {
        return this.size > 500;
    }
}