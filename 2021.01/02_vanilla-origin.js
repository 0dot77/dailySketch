let n;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  colorMode(HSB);
  n = 0;
}

function draw() {
  translate(width / 2, height / 2);
  background(0);
  
  fill(n % 255,255,255);
  ellipse(0, 0, 250, 250);
  
  stroke(0,200);
  fill(0);
  rect(0,0,250,2);
  rect(0,10,250,5);
  rect(0,25,250,7);
  rect(0,42.5,250,10);
  rect(0,65,250,15);
  rect(0,90,250,17);
  rect(0,115,250,20);
  n++;
  

}
