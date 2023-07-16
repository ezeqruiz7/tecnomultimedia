// Ezequiel Ruiz 95548/3
// Comision 1
//https://www.youtube.com/watch?v=EBD50yJIU9o&ab_channel=ezequielruiz
PImage imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18, imagen19, imagen20, imagen21, imagen22, imagen23, imagen24, imagen25, imagen26, imagen27, imagen28, imagen29;
int numero = 29;
PImage[] pantalla = new PImage[numero];
int numeroboton;
String [] boton = {"    Abrir", " Siguiente", "      Fin", "  Reiniciar"};
int x, x1;
int y, y1;
int ladox;
int ladoy;
String [] texto = {" ", "Antes de subir a las colinas azules, \n Tomas gomez se detuvo\n en la estación de gasolina", "Tomas le pregunto al viejo que trabajaba\n ahi si le gustaba marte",
  "El viejo le dijo que si, y empezaron a hablar \n de lo distinto \n que es de la tierra, luego este le conto \n como llego", "Tomas se fue en la carretera, \n la cual estaba muy silenciosa esa noche,\n fue delirando en sus pensamientos", "Bajo en una aldea marciana muerta,\n era todo ruinas pero era hermosa, se sirvió \n una taza de café de su termo y\n siguió andando a pie",
  "Un rato después se oyo un ruido, \n tomas se movio lentamente, y aparecio \n una especie de mantis robot", "Tomas y el alien intentaban comunicarse\n pero cada uno en su idioma,\n entonces ninguno se entendia", "¡Espera! Tomás sintió que le rozaban la \ncabeza, aunque ninguna mano\n lo había tocado", "Ya está dijo el marciano en inglés-.\n Así es mejor. -Qué pronto has aprendido\n mi idioma!\n -No es nada.", "Tomas intento invitarle una taza de cafe", "Pero cuando se la intento dar,\n estos se atravesaron",
  "Ambos se sorprendieron", "Tomas se dio cuenta que veia al alien\n transparente como si estuviese lleno\n de estrellas, el alien igual", "Hablaron que eran de distintos \n años, que tomas veía la ciudad de los aliens\n en ruinas, y el alien donde deberia\n ir segun tomas el pueblo humano,\n veia solo un oceano",
  "-Admitamos nuestro desacuerdo -dijo \nel alien-.\n¿Qué importa quién es el pasado o el futuro,\n si ambos estamos vivos?",
  "Tomás tendió la mano. El marciano lo imitó.\n Sus manos no se tocaron,\n se fundieron atravesándose.", "Se despidieron y se fueron cada uno\n por su lado",
  "-¡Dios mío! ¡Qué pesadillas! -suspiró Tomás,\n con las manos en el volante, \n pensando en todo.", "-¡Qué extraña visión! -se dijo el marciano,\n y se alejó rápidamente, pensando en todo.",
  "De el robot se bajo un alien, lo unico\n que hizo fue acercarse y decirle a tomas:\n Los voy a matar", "Luego lo ataco y Tomas se defendio", "Y cuando el alien estaba por matarlo...", "Tomas se desperto", "-Era todo un sueño",
  "De el robot se bajo un alien,\n hablamos y teniamos bastantes\n cosas en comun", "Estuvimos toda la noche juntos, sentimos\n una conexion unica, decidimos\n nunca separarnos", "Vivieron felices para siempre", " "};
int numerotexto;
PFont fuente;

void setup() {
  size(600, 600);
  for (int i = 0; i<numero; i++) {
    pantalla[i] = loadImage("imagen" + i + ".jpg");
    fuente = loadFont ("FranklinGothic-Heavy-48.vlw");
  }

  numero = 0;
}

void draw() {
  image(pantalla[numero], 0, 0, width, height);
  x = 475;
  y = 50;
  x1 = 5;
  y1 = 50;
  ladox = 120;
  ladoy = 40;
  botoncuadrado (x, y, ladox, ladoy);
  if (numero == 6) {
    botoncuadrado (x1, y1, ladox, ladoy);
    botoncuadrado (width / 2 -ladox/2, y1, ladox, ladoy);
  }
  if (numero >= 1 && numero != 28) {
    fill (224, 186, 186);
    rect (70, 470, 500, 100);
  }


  textFont (fuente);
  textSize(20);
  fill(0);
  if (numero > 0 && numero != 14) {
    text(texto[numero], 150, 500);
  }
  if (numero == 14) {
    textSize(16);
    text(texto[14], 150, 495);
  }
}
void mousePressed() {
  if (numero != 25 || numero != 28 || numero != 20) {
    if ( mouseX >= x && mouseX <=  ladox + x  && mouseY >=  y && mouseY <= y + ladoy ) {
      numero = (numero + 1) % pantalla.length;
      numeroboton = (numeroboton + 1) % boton.length;
    }
  }
  if (numero == 25 || numero == 28 || numero == 20) {
    if (mouseX >= x && mouseX <=  ladox + x  && mouseY >=  y && mouseY <= y + ladoy) {

      numero = 28;
    }
  }
  if (numero == 6) {
    if (mouseX >= x1 && mouseX <=  ladox + x1  && mouseY >=  y1 && mouseY <= y1 + ladoy) {
      numero = 20;
    } else if (mouseX >= width / 2 -ladox/2 && mouseX <= width/2 + ladox/2 && mouseY >= y1 && mouseY <= y1 + ladoy) {
      numero = 25;
    }
  }
}

void botoncuadrado(float x, float y, float ladox, float ladoy) {
  fill (0);
  strokeWeight (5);
  rect (x-5, y+5, ladox, ladoy);
  fill (255, 226, 5);
  strokeWeight (5);
  rect(x, y, ladox, ladoy);
  textSize (22);
  fill (0);
  if (numero == 0) {
    text(boton[numero], x+5, y+25);
  } else if (numero == 24 || numero == 27 || numero == 19) {
    text(boton[2], x+5, y+25);
  } else if (numero == 28) {
    text(boton[3], x+5, y+25);
  } else {
    text (boton[1], x+5, y+25);
  }
}
