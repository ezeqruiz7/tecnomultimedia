// Ezequiel Ruiz
// Comision 1

String pantalla;
int cuenta;
int pos;
PImage estadio1, estadio2, estadio3;
float x = 600;
float y = 200;
float speed = 3;
int tama = 300;
PFont fuente, fuente1, fuente2;




void setup( ) {
  size (640, 480);
  pantalla = "inicio";
  cuenta = 0;
  textSize (25);
  textAlign (CENTER);
  pos= 480;
  estadio1 = loadImage ("estadio1.jpg");
  estadio2 = loadImage ("estadio.jpg");
  estadio3 = loadImage ("estudio1.jpg");
  fuente = loadFont ("CalisMTBol-48.vlw");
  fuente1 = loadFont ("ComicSansMS-BoldItalic-48.vlw");
  fuente2 = loadFont ("FranklinGothic-DemiItalic-48.vlw");
  
}


void draw () {
  cuenta ++;
  if (pantalla.equals ("inicio")) {
    image (estadio1, 0, 0, width, height);
    textFont (fuente1);
    textSize (20);
    fill(255);
    text ("El Estadio Jorge Luis Hirschi \n—denominado oficialmente Estadio UNO Jorge Luis Hirschi— \n es el estadio perteneciente  al Club Estudiantes de La Plata. ", x, 200);
    x -= speed;
    speed %= 2;
    
  } else if (pantalla.equals ("segunda") ) {
    image (estadio2, 0, 0, width, height);
    textAlign (CORNER);
    textFont (fuente);
    fill (0);
    textSize (20);
    text ("Está ubicada en la avenida 1 entre 55 y 57 en la ciudad de La Plata. \n       Cuenta con capacidad para albergar a 32.530 espectadores.", 20, x, width, height);
    x+=1;
    
  } else if (pantalla.equals ("tercera")) {
    image (estadio3, 0, 0, width, height);
    

   
    rect(240, tama, 120, 30);
    fill(tama);
    textSize(tama);
    text("Reiniciar", 300, 50);
    

    textAlign (CENTER);
    fill (237, 5, 5);
    textFont (fuente2);
    textSize (tama);
    tama --;
    if (tama <= 25)
    {
      tama = 25;
    } else {
      tama --;
    }

    text ("Lo que la convierte en el recinto deportivo\n no gubernamental de mayor aforo de la región.", width/2, 200);
  } else {
    textAlign (CENTER);
    text ("fin", width/2, 100);
  }
  if (cuenta < 540) {
    pantalla = "inicio";
  } else if ((cuenta >= 660) && cuenta < 900) {
    pantalla = "segunda";
  } else if ((cuenta >= 1000) && cuenta < 1100) {
    pantalla = "tercera";
    rect(240, tama, 120, 30);
    fill(tama);
    textSize(tama);
    text("Reiniciar", 300, 50);
    
    
  }
  
}
void mousePressed() {
 if (pantalla.equals("tercera") && mouseX >= 240 && mouseX <= 360 && mouseY >= 25 && mouseY <= 55) {
    pantalla = "inicio";
      pantalla = "inicio";
      cuenta = 0;
      cuenta++;
      x = 600;
      y = 200;
      tama = 300;
    }
  }
