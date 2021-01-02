var n = 0;
var c = 4;
var rotateA = 0;
let ca;
function setup() {
  ca = createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);
  
  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;
  
  fill(mouseX % 256,255,255);
  noStroke();
  ellipse(x,y,4);
  
  n++;

  
  if(n > 1000) {
    noLoop();
  }
  
  if(mouseIsPressed) {
    saveCanvas(ca,'jpg');
  }
}
