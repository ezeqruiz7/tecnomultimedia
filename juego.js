class Juego {
  constructor() {
    this.stones = [];
    this.score = 0;
    this.gameOver = false;
    this.car = new Car();
    this.fondo = loadImage('data/marte.jpg');
  }

  dibujar() {
    background(220);
    image(this.fondo, 0, 0);
    image(this.fondo, 0, height , width, height);

    if (!this.gameOver) {
      this.car.dibujar();
      this.car.move();

      if (frameCount % 60 == 0) {
        this.stones.push(new Stone());
      }

      for (let i = this.stones.length - 1; i >= 0; i--) {
        this.stones[i].dibujar();
        this.stones[i].fall();

        if (this.car.hits(this.stones[i])) {
          this.gameOver = true;
        }

        if (this.stones[i].offscreen()) {
          this.stones.splice(i, 1);
          this.score++;
        }
      }

      fill(0);
      textSize(20);
      text(`Score: ${this.score}`, 20, 20);
    } else {
      this.mostrarGameOver();
    }
  }

  mostrarGameOver() {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
    textSize(20);
    text('Presiona F5 para reiniciar', width / 2, height / 2 + 40);
  }

  keyPressed() {
    if (this.gameOver && keyCode === 116) {
      this.stones = [];
      this.score = 0;
      this.gameOver = false;
      this.car = new Car();
    }
  }
}
