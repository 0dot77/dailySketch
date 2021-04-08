let elSize;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  push();
  elSize = 100;
  let elPos = createVector(width/2-100,height/2-100);
  let txPos = createVector(width/2+100, height/2+40);
  let d = dist(mouseX,mouseY,width/2-100,height/2-100);
  if(d < 50) {
    background(255,0,0);
    fill(0);
    elSize = map(sin(1-frameCount/10),-1,1,50,150);
    if(floor(elSize) < 110) {
      elPos.x += random(-3,3);
      elPos.y += random(-3,3);
      txPos.x += random(-5,5);
      txPos.y += random(-5,5);
    }
  } else {
    noStroke();
    fill(255);
  }
  ellipse(elPos.x,elPos.y, elSize, elSize);
  pop();
  
  textSize(80);
  textLeading(70);
  text('파\n르\n르', txPos.x, txPos.y);
}
