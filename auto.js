class Car {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.width = 40;
    this.height = 20;
    this.image = loadImage('data/nave.png');
  }

  dibujar() {
    fill(0, 0);
    stroke(0,0);
    rect(this.x - this.width / 4, this.y, this.width, this.height);
    image(this.image,this.x - this.width / 4, this.y, this.width, this.height)
  
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > this.width / 2) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width / 2) {
      this.x += 5;
    }
  }

  moveLeft() {
    if (this.x > this.width / 2) {
      this.x -= 10;
    }
  }

  moveRight() {
    if (this.x < width - this.width / 2) {
      this.x += 10;
    }
  }

  hits(stone) {
    return (
      this.x - this.width / 2 < stone.x &&
      this.x + this.width / 2 > stone.x &&
      this.y < stone.y + stone.height
    );
  }
}
