class Stone {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.width = random(10, 30);
    this.height = random(10, 30);
    this.image = loadImage('data/roca.png')
  }

  dibujar() {
    fill(0,0);
    stroke(0,0);
    rect(this.x, this.y, this.width, this.height);
    image(this.image,this.x, this.y, this.width, this.height)
  }

  fall() {
    this.y += 5;
  }

  offscreen() {
    return this.y > height;
  }
}
