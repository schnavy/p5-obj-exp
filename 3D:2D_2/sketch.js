let objs =  []
let valueX = 0;
let valueY = 0;
let img;
let pause;
let d;
let sca = 1;
let curr = 0;

function preload() {
  objs[0] = loadModel('asstes/box-sculpt.obj', true);
  objs[1] = loadModel('asstes/scultvr2.obj', true);
  objs[2] = loadModel('asstes/scultvr3.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('asstes/3.jpg');

}

function draw() {
  noStroke();
//background(200)
  smooth()
  //image(img, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)
  fill(250, 250, 250, sca*35)
  rect( -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)

  moveView()
  ambientLight(255);
  pointLight(50, 50, 50, mouseX,mouseY, 100);

 
  scale(sca);
  rotateX(valueX);
  rotateY(valueY);


  specularMaterial(0);
 //normalMaterial(); 
  model(objs[curr]);
  //texture(img);


}

function moveView() {
    if(pause){
      return
}
  d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2)/50000;
  if(mouseX > windowWidth/2){
      valueX += d;
  }else{
    valueX -= d;
  }
  if(mouseY > windowHeight/2){
      valueY += d;
  }else{
    valueY -= d;
  }
}

function mousePressed(){
 // pause = !pause
  sca+= 4
  if (sca >10){
    sca = 1
  }
}
  
document.addEventListener('keydown', (e)=>{
 if(e.code === 'Space'){
   print(curr) 
   curr++
     if (curr >2){
    curr = 0
  }
 }
});
