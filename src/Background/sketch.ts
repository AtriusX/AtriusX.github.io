import * as p5 from "p5";

export default function(sketch: p5) {
    let particles: Array<Particle> = [];
    let width  = sketch.windowWidth;
    let height = sketch.windowHeight;
    sketch.setup = function() {
        for (let i = 0; i < 500; i++) {
            sketch.createCanvas(width, height);
            particles.push(new Particle(
                Math.random() * width,
                Math.random() * height,
                Math.random() - 0.5,
                Math.random() - 0.5
            ));
        }
    };
    let counter = 0;
    sketch.draw  = function() {

        document.body.style.backgroundColor = `hsl(${276 + Math.sin(counter += 0.001) * 70}, 100%, 10%)`;
        sketch.resizeCanvas(window.innerWidth, window.innerHeight);
        sketch.background(30, 0, 50, 50);
        sketch.noStroke();
        particles.forEach(p => {
            sketch.fill(sketch.color(`hsl(${p.hue += 2}, 100%, 60%)`));
            sketch.circle(p.x, p.y, 2);
            p.x += p.velX * 2;
            p.y += p.velY * 2;
            if (Math.random() * 100 > 99) {
                p.velX = Math.random() * 2 - 1;
                p.velY = Math.random() * 2 - 1;
            }
            if (p.hue > 230)
                p.hue = 170;
            if (p.x < 0)
                p.x = width;
            if (p.y < 0)
                p.y = height;
            if (p.x > width)
                p.x = 0;
            if (p.y > height)
                p.y = 0;
        });
    }
    
}

class Particle {
    public hue: number;

    constructor(public x: number, public y: number, public velX: number, public velY: number) {
        this.hue = Math.floor(170 + Math.random() * 60);
    }
}

