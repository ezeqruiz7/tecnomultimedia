class Aplicacion {
  constructor() {
    this.numero = 0;
    this.numeroboton = 0;
    this.boton = ["    Abrir", " Siguiente", "      Fin", "  Reiniciar"];
    this.x = 475;
    this.x1 = 5;
    this.y = 50;
    this.y1 = 50;
    this.ladox = 120;
    this.ladoy = 40;
    this.texto = [" ", "\n \n Antes de subir a las colinas azules, \n Tomas gomez se detuvo\n en la estación de gasolina", "\n Tomas le preguntó al viejo que trabajaba\n ahi si le gustaba marte",
      "\n \n El viejo le dijo que sí, y empezaron a hablar \n de lo distinto que es de la tierra,\nluego este le contó como llegó", "\n \n Tomas se fue en la carretera, \n la cual estaba muy silenciosa esa noche,\n fue delirando en sus pensamientos", "\n \n \n Bajo en una aldea marciana muerta,\n era todo ruinas pero era hermosa, se sirvió \n una taza de café de su termo y\n siguió andando a pie",
      "\n \n Un rato después se oyó un ruido, \n tomas se movió lentamente, y apareció \n una especie de mantis robot", "\n \n Tomas y el alien intentaban comunicarse\n pero cada uno en su idioma,\n entonces ninguno se entendía", "\n \n¡Espera! Tomás sintió que le rozaban la \ncabeza, aunque ninguna mano\n lo había tocado", "\n \n \n Ya está dijo el marciano en inglés-.\n Así es mejor. -Qué pronto has aprendido\n mi idioma!\n -No es nada.", "\n Tomas intentó invitarle una taza de cafe", "\n Pero cuando se la intentó dar,\n estos se atravesaron",
      "\n \n Ambos se sorprendieron", "\n \n Tomas se dio cuenta que veía al alien\n transparente como si estuviese lleno\n de estrellas, el alien igual", "\n \n \n \nHablaron que eran de distintos \n años, que tomas veía la ciudad de los aliens\n en ruinas, y el alien donde debería\n ir según tomas el pueblo humano,\n veía solo un océano",
      "\n \n \n \n -Admitamos nuestro desacuerdo -dijo \nel alien-.\n¿Qué importa quién es el pasado o el futuro,\n si ambos estamos vivos?",
      "\n \n Tomás tendió la mano. El marciano lo imitó.\n Sus manos no se tocaron,\n se fundieron atravesándose.", "\n Se despidieron y se fueron cada uno\n por su lado",
      "\n \n -¡Dios mío! ¡Qué pesadillas! -suspiró Tomás,\n con las manos en el volante, \n pensando en todo.", "\n \n -¡Qué extraña visión! -se dijo el marciano,\n y se alejó rápidamente, pensando en todo.",
      "\n \n De el robot se bajó un alien, lo único\n que hizo fue acercarse y decirle a Tomás:\n Los voy a matar", "\n \n Luego lo atacó y Tomas se defendió", "\n \n Y cuando el alien estaba por matarlo...", "\n Tomas se despertó", "\n -Era todo un sueño",
      "\n \n De el robot se bajó un alien,\n hablamos y teníamos bastantes\n cosas en común", "\n \n Estuvimos toda la noche juntos, sentimos\n una conexión única, decidimos\n nunca separarnos", "\n \n Vivieron felices para siempre", " "];
    this.pantalla = new Array(this.texto.length);
    for (let i = 0; i < this.pantalla.length; i++) {
      this.pantalla[i] = loadImage("data/imagen" + i + ".jpg");
    }
    this.estadoJuego = false;
    this.juego = new Juego();
  }

  // Método agregado para manejar la lógica del movimiento del carro
  moverCarro() {
    this.juego.moverCarro();
  }

  dibujar() {
    if (this.estadoJuego) {
      this.juego.dibujar();
    } else {
      image(this.pantalla[this.numero], 0, 0, width, height);
      this.botonCuadrado(this.x, this.y, this.ladox, this.ladoy);
      if (this.numero == 6) {  // Cambiado el número de pantalla
        this.botonCuadrado(this.x1, this.y1, this.ladox, this.ladoy);
        this.botonCuadrado(width / 2 - this.ladox/2, this.y1, this.ladox, this.ladoy);
      }
      if (this.numero >= 1 && this.numero !== 28) {
        fill(224, 186, 186);
        rect(70, 450, 500, 120);
      }
      textSize(20);
      fill(0);
      if (this.numero > 0 && this.numero !== 14) {
        textAlign (CENTER, CENTER)
          text(this.texto[this.numero], width/2, height - height/5);
      }
      if (this.numero == 14) {
        textSize(16);
        text(this.texto[14], 150, 495);
      }
    }
  }

  mousePresionado() {
    if (this.estadoJuego) {
      // Lógica para el juego en curso
      this.juego.teclaPresionada();

      // Verifica si el juego ha terminado (ganado o perdido)
      if (this.juego.gameOver || this.juego.gameWin) {
        this.numero = 5;  // Transición de vuelta a la pantalla 5
        this.estadoJuego = false;
        this.juego.stones = [];
        this.juego.score = 0;
        this.juego.gameOver = false;
        this.juego.gameWin = false;
        this.juego.car = new Car();
      }
    } else {
      // Lógica para cuando el juego no está en curso
      if (this.numero !== 4) {
        if (mouseX >= this.x && mouseX <= this.ladox + this.x && mouseY >= this.y && mouseY <= this.y + this.ladoy) {
          this.numero = (this.numero + 1) % this.pantalla.length;
          this.numeroboton = (this.numeroboton + 1) % this.boton.length;
        }
      }

      if (this.numero == 20 || this.numero == 25 || this.numero == 28) {
        if (mouseX >= this.x && mouseX <= this.ladox + this.x && mouseY >= this.y && mouseY <= this.y + this.ladoy) {
          this.numero = 28;
        }
      }

      if (this.numero == 6) {
        if (mouseX >= this.x1 && mouseX <= this.ladox + this.x1 && mouseY >= this.y1 && mouseY <= this.y1 + this.ladoy) {
          this.numero = 20;
        } else if (mouseX >= width / 2 - this.ladox/2 && mouseX <= width/2 + this.ladox/2 && mouseY >= this.y1 && mouseY <= this.y1 + this.ladoy) {
          this.numero = 25;
        }
      }

      if (this.numero == 4) {
        this.iniciarJuego();  // Llamamos a la función que inicia el juego
      }
    }

    // Verificar si estamos en la pantalla 28
    if (this.numero == 28) {
      this.moverCarro(); // Llama al método que maneja el movimiento del carro
    }
  }

  iniciarJuego() {
    this.estadoJuego = true;  // Marcamos que el juego está en curso
    this.juego = new Juego();  // Creas una nueva instancia de la clase Juego
  }

  botonCuadrado(x, y, ladox, ladoy) {
    fill(0);
    strokeWeight(5);
    rect(x - 5, y + 5, ladox, ladoy);
    fill(255, 226, 5);
    strokeWeight(5);
    rect(x, y, ladox, ladoy);
    textSize(22);
    fill(0);
    if (this.numero == 0) {
       textAlign(LEFT, CENTER);
       text(this.boton[this.numero], x + 5, y + 25);
    } else if (this.numero == 24 || this.numero == 27 || this.numero == 19) {
      textAlign(LEFT, CENTER);
      text(this.boton[2], x + 5, y + 25);
    } else if (this.numero == 28) {
      textAlign(LEFT, CENTER);
      text(this.boton[3], x + 5, y + 25);
    } else {
      textAlign(LEFT, CENTER);
      text(this.boton[1], x + 5, y + 25);
    }
  }
}
