class FractalStair {
  constructor(x, y, size, depth, angle) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.depth = depth;
    this.angle = angle;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    rect(0, 0, this.size, this.size);
    pop();

    if (this.depth > 0) {
      let newSize = this.size * 0.9;
      let newAngle = this.angle + 15;
      let nextX = this.x + cos(radians(newAngle)) * this.size * 0.5;
      let nextY = this.y + sin(radians(newAngle)) * this.size * 0.5;
      let nextStair = new FractalStair(nextX, nextY, newSize, this.depth - 1, newAngle);
      nextStair.draw();
    }
  }
}

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  let initialStair = new FractalStair(width / 2, height / 2, 200, 30, 0);
  initialStair.draw();
}
