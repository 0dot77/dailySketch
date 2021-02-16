let myFont;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}
function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  // background(0);
  
  textAlign(CENTER, CENTER);
  textFont(myFont);
  textSize(mouseY);
  fill(mouseX,random(0,100),random(100,200));
  text('차',width/2, height/2 - 30);
}
