import * as p5 from "p5";

let particles: Array<Particle> = [];
let width  = (p5: p5) => p5.windowWidth;
let height = (p5: p5) => p5.windowHeight;
let mouse: Particle

export async function setup(p5: p5, canvasRef: Element) {
    if (particles.length !== 0) 
        return;
    p5.createCanvas(width(p5), 900).parent(canvasRef);
    mouse = new Particle(0, 0, 0, 0);
    for (let i = 0; i < width(p5) / 10; i++) {
        particles.push(new Particle(
            Math.random() * width(p5),
            Math.random() * height(p5),
            Math.random() - 0.5,
            Math.random() - 0.5
        ));
    }
    particles.push(mouse);
    resized(p5);
};

export async function draw(p5: p5) {
    if (particles.length === 0) return;

    p5.clear();
    p5.background(p5.color("rgba(0,0,0,0.3)"))
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
                p5.stroke(this.y | (this.counter - p.y), this.x | (p.y - this.counter), (p.x | this.counter) & this.y, alpha);
                p5.line(this.x, this.y, p.x, p.y);
            }
        });
        this.counter += this.counter % 500000;        
    }
}

