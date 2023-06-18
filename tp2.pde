PImage ilusion;
float tamañocirculo = random(1, 134);

void setup() {
  size(800, 400);
  ilusion = loadImage("op-blue1.jpeg");
}

void draw() {
  background(255);
  image(ilusion, 0, 0, width / 2, height);

  for (int i = 400; i < width; i += 133) {
    for (int h = 0; h < height; h += 133) {
      dibujar(i, h);
    }
  }
}

void dibujar(int i, int h) {
  if ((i + h) % 2 == 0) {
    if (mousePressed && mouseActivado()) {
      fill(0);
    } else {
      fill(22, 15, 225);
    }
  } else {
    if (mousePressed && mouseActivado()) {
      fill(22, 15, 225);
    } else {
      fill(0);
    }
  }

  rect(i, h, 133, 133);

  


  if ((i + h) % 2 == 0) {
    if (mousePressed && mouseActivado()) {
      fill(22, 15, 225);
    } else {
      fill(0);
    }
  } else {
    if (mousePressed && mouseActivado()) {
      fill(0);
    } else {
      fill(22, 15, 225);
    }
  }

  
  ellipse(i + 133 / 2, h + 133 / 2, tamañocirculo, tamañocirculo);
}

boolean mouseActivado() {
  if (mouseX >= width / 2 && mouseX < width && mouseY >= 0 && mouseY < height) {
    return true;
  } else {
    return false;
  }
}
