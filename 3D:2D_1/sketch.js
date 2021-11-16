let objs = [];
let valueX = 0;
let valueY = 0;
let img;
let pause;
let d;
let sca = 1;
let curr = 0;

function preload() {
  objs[0] = loadModel("asstes/box-sculpt.obj", true);
  objs[1] = loadModel("asstes/scultvr2.obj", true);
  objs[2] = loadModel("asstes/scultvr3.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage("asstes/3.jpg");
}

function draw() {
  noStroke();
  background(230);
  smooth();
  //image(img, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)
  //fill(250, 250, 250, sca*35)
  //rect( -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)
  moveView();
  ambientLight(255);
  //pointLight(255, 0, 0, mouseX,mouseY, 100);

  scale(sca);

  specularMaterial(0, 0, 0);
  //normalMaterial();
  push();
  translate(-windowWidth / 2 + windowWidth / 4, 0, 0);

  rotateX(valueX);
  //rotateY(valueY);
  model(objs[0]);
  pop();
  push();
  translate(-windowWidth / 2 + (windowWidth / 4) * 2, 0, 0);

  rotateX(valueX);
  rotateY(valueY);
  model(objs[2]);
  pop();
  push();
  translate(-windowWidth / 2 + (windowWidth / 4) * 3, 0, 0);

  rotateX(valueX);
  rotateY(valueY);
  model(objs[2]);
  pop();

  //texture(img);
}

function moveView() {
  if (pause) {
    return;
  }
  d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2) / 50000;
  if (mouseX > windowWidth / 2) {
    valueX += d;
  } else {
    valueX -= d;
  }
  if (mouseY > windowHeight / 2) {
    valueY += d;
  } else {
    valueY -= d;
  }
}
