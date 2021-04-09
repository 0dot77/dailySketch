function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,100,200);
  blendMode(BLEND);
  translate(width/2, height/2);
    
  //ray1
  push();
  stroke(0);
  for(let i = 0; i < width; i+=10) {
    line(i,-200,0,0);
  }
  pop();
  
  //ray2
  push();
  stroke(255);
  for(let j = 0; j > - 200; j-=10) {
    line(0,0,j,200);
  }
  pop();
  
  //making cloud
  
  
  blendMode(SCREEN);
  push();
  noStroke();
  fill(255,0,0);
  ellipse(0,0,50,50);
  fill(100,0,0);
  ellipse(0,15,50,50);
  fill(200,0,0);
  ellipse(25,0,50,50);
  fill(200,50,0);
  ellipse(50,0,50,50);
  fill(100,50,0);
  ellipse(25,-25,50,50);
  fill(200,80,0);
  ellipse(0,-25,50,50);
  fill(185,10,0);
  ellipse(-25,0,50,50);
  fill(166,0,50);
  ellipse(25,15,50,50);
  pop();
  
  //text
  
  blendMode(BLEND);
  noFill();
  stroke(255);
  textSize(20);
  textStyle(ITALIC);
  textAlign(LEFT,CENTER);
  text('아주 화창한 날,\n산에 닿아야 하는 빛을 구름이 막아서 생기는\n그 대조적인 환함', -185,125);
}
