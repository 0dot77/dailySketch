let word = 'M';
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  // noStroke();
  let maxNum = map(sin(frameCount/50),-1,1,0,20);
  
  for(let u = 0; u < 5; u++) {
  scale(0.65);
  textSize(100);
  push();
    fill(0,255,0);
  text(word,155,240);
    pop();
  translate(width/2, height/2);
  push();
  for(let i = 0; i < maxNum; i++) {
   rotate(radians(i * 2));
    translate(-20,-3);
    ellipse(30,0,i* 2,i* 2);
  }
  pop();
  
  push();
  for(let i = 0; i < maxNum; i++) {
   rotate(radians(-i * 2));
    translate(-20,3);
    ellipse(30,0,i* 2,i* 2);
  }
  pop();
  
    push();
  for(let i = 0; i < maxNum; i++) {
   rotate(radians(-i * 2));
    translate(20,-3);
    ellipse(-30,0,i* 2,i* 2);
  }
  pop();
  
      push();
  for(let i = 0; i < maxNum; i++) {
   rotate(radians(i * 2));
    translate(20,3);
    ellipse(-30,0,i* 2,i* 2);
  }
  pop();
  }
}
