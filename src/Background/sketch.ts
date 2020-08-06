import * as p5 from "p5";

export default function(sketch: p5) {
    let particles: Array<Particle> = [];
    let width  = () => sketch.windowWidth;
    let height = () => sketch.windowHeight;
    sketch.setup = async function() {
        sketch.createCanvas(width(), height());
        for (let i = 0; i < (width() < 768 ? 50 : 75); i++) {
            particles.push(new Particle(
                Math.random() * width(),
                Math.random() * height(),
                Math.random() - 0.5,
                Math.random() - 0.5
            ));
        }
    };

    let counter = 0;
    sketch.draw = async function() {
        document.body.style.backgroundColor = `hsl(${276 + Math.sin(counter += 0.001) * 70}, 100%, 10%)`;
        sketch.background(30, 0, 50, 150);
        particles.forEach(p => {
            sketch.fill(sketch.color(`hsl(${p.hue += 2}, 100%, 60%)`));
            if (sketch.windowWidth >= 768) {
                sketch.stroke(p.x, p.y, 255, Math.abs(p.velX * 30 | Math.sin(p.velY)));
                sketch.line(p.x, p.y, p.x ^ p.y, p.y << 2);
            }
            sketch.noStroke();
            sketch.circle(p.x, p.y, 2);
            p.x = (p.x + p.velX * 2) % width();
            p.y = (p.y + p.velY * 2) % height();
            
            if (p.x < 0) p.x = width();
            if (p.y < 0) p.y = height();
            // Randomly change velocity
            if (Math.random() * 100 > 99) {
                p.velX = Math.random() * 2 - 1;
                p.velY = Math.random() * 2 - 1;
            }
            // Modulate color
            if (p.hue > 230) p.hue = 170;
        });
    }

    sketch.windowResized = function() {
        sketch.resizeCanvas(width(), height());
    }
}

class Particle {
    public hue: number;

    constructor(public x: number, public y: number, public velX: number, public velY: number) {
        this.hue = Math.floor(170 + Math.random() * 60);
    }
}

