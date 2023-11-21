let mario;
let marioUV;

function preload() {
  mario = loadModel('girlbosskeleton.OBJ', true);
  marioUV = loadImage('tecture.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  stroke(0);
  strokeWeight(0);
  background(150);
  //orbitControl(50, 0, 100)
  orbitControl();
  rotateZ(PI)
  model(mario);
  //texture(marioUV);
}