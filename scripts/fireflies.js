class Particle {
    constructor(x, y, velX, velY) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.hue = Math.floor(170 + Math.random() * 60);
    }
}
var particles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
    for (i = 0; i < 500; i++) {
        particles.push(new Particle(
            Math.random() * windowWidth,
            Math.random() * windowHeight,
            Math.random() - 0.5,
            Math.random() - 0.5
        ));
    }
}
var counter = 0;
function draw(){
  document.body.style.backgroundColor = `hsl(${276 + Math.sin(counter += 0.001) * 70}, 100%, 10%)`
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(30, 0, 50, (Math.random() * 100 > 99) ? 50 : 50);
  noStroke();
  particles.forEach(p => {
    fill(color(`hsl(${p.hue+=2}, 100%, 60%)`));
    circle(p.x, p.y, 2);
    p.x += p.velX * 2;
    p.y += p.velY * 2;
    if (Math.random() * 100 > 99) {
      p.velX = Math.random() * 2 - 1;
      p.velY = Math.random() * 2 - 1;
    }
    if (p.hue > 230)
      p.hue = 170;
    if (p.x < 0)
      p.x = windowWidth;
    if (p.y < 0)
      p.y = windowHeight;
    if (p.x > windowWidth)
      p.x = 0;
    if (p.y > windowHeight)
      p.y = 0;
  });
}