// Ezequiel Ruiz Comision 1
// https://youtu.be/WHIs6W1FLMs, perdon por el audio,lo grabe muchas veces y se escuchaba mal, este fue el mejor


let juego;

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
} 

function draw() {
  juego.dibujar();
}

function keyPressed() {
  juego.keyPressed();
}
