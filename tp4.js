// Ezequiel Ruiz 95548/3 Comision 1

let pantallaInicio = true;
let pantallaCreditos = false; 

let cuenta;
let speed = 3;
let gamespeed;
let obstaculo;
let ancho;
let salto = false;
let alturadesalto;
let dinoX;
let dinoY;
let colision = false;
let score;
let juegoTerminado = false;
let ultimoSalto = 0;
const tiempoMinimoEntreSaltos = 500;

function setup() {
  createCanvas(800, 400);
  gamespeed = 5;
  obstaculo = width;
  ancho = random(10, 30);
  alturadesalto = 200;
  dinoX = 50;
  dinoY = 200;
  score = 0;
}

function draw() {
  if (pantallaInicio) {
    background(48, 140, 250);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text("¡Presiona Enter para jugar!", width / 2, height / 2 - 40);
    textSize(20);
    text("Reglas:", width / 2, height / 2 + 15);
    textSize(10);
    text(
      "Apreta la flecha superior para saltar, esquiva los obstaculos, si llegas a 500 puntos ganaras, la puntuacion avanza mientras sobrevives",
      width / 2,
      height / 2 + 40
    );
  } else if (pantallaCreditos) {
    
    background(0, 255, 0); 
    textSize(48);
    textAlign(CENTER, CENTER);
    fill(255);
    text('¡Créditos!', width / 2, height / 2);
    textSize(24);
    text('Hecho por Tu Ezequiel Ruiz', width / 2, height / 2 + 40);
    textSize(14);
    text('Apreta Flecha Izquierda para volver al inicio', width / 2, height - 30);
  } else {
   
    background(48, 140, 250);
    rect(0, 350, 800, 400);
    score++;
    textSize(20);
    text("score =" + score, 100, 10);

    if (score >= 500) {
      juegoTerminado = true;
    }
    if (
      dinoX + 30 >= obstaculo &&
      dinoX <= obstaculo + 20 &&
      dinoY + 50 >= 330
    ) {
      colision = true;
    }
    if (!colision) {
      obstaculo -= gamespeed;
      fill(14, 142, 19);
      rect(obstaculo, 310, 20, 40);
      if (obstaculo < -1) {
        obstaculo = width;
      }
    }

    if (!colision) {
      rect(dinoX, dinoY, 30, 50);
      if (salto) {
        dinoY -= 6;
        if (dinoY < height - alturadesalto) {
          salto = false;
        }
      } else if (dinoY < 300) {
        dinoY += 6;
      }
    }

    if (colision) {
      fill(255, 0, 0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('¡Perdiste!', width / 2, height / 2);
      rect(330, 243, 150, 30);
      fill(1);
      textSize(10);
      text(' Apreta R para jugar de nuevo', 400, 260);
      fill(14, 142, 19);
      score = -1;
     
      
    }

    if (juegoTerminado) {
      textSize(48);
      textAlign(CENTER, CENTER);
      text('¡Ganaste!', width / 2, height / 2);
      rect(330, 243, 150, 30);
      fill(1);
      textSize(10);
      text('Apreta R para jugar de nuevo', 400, 260);
      text('Apreta T para ir a creditos', 400, 320);
      
      noLoop();
    }
  }
}

function keyPressed() {
  if (pantallaInicio) {
    if (keyCode === ENTER) {
      pantallaInicio = false;
    }
  } else if (pantallaCreditos) {
    if (keyCode === LEFT_ARROW) {
      pantallaCreditos = false;
      pantallaInicio = true;
    }
  } else {
    if (keyCode === UP_ARROW && !salto && !colision) {
      if (millis() - ultimoSalto >= tiempoMinimoEntreSaltos) {
        salto = true;
        ultimoSalto = millis();
      }
    }

    if (colision || juegoTerminado) {
      if (keyCode === 82) {
        colision = false;
        dinoY = 200;
        cuenta = 0;
        cuenta++;
        score = 0;
        score++;
        juegoTerminado = false;
        obstaculo = width;
        loop();
        
      
      }
    }

    if (juegoTerminado) {
      if (keyCode === 84) {
        colision = false;
        dinoY = 200;
        cuenta = 0;
        cuenta++;
        score = 0;
        score++;
        juegoTerminado = false;
        loop();
        pantallaCreditos = true;
        obstaculo = width;
        
      }
    }
  }
}
