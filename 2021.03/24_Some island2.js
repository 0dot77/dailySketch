function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,30);
  
  translate(width/2, height/2);
  
  
  //   push();
  //   scale(0.15);
  // beginShape(LINES);
  // strokeWeight(10);
  // stroke(255,10);
  // // let m = map(mouseX,0,400,-TWO_PI,TWO_PI);
  // for(let angle = -1; angle < 5; angle += 0.08) {
  //   let x = angle * 250;
  //   let y = sin(angle + frameCount/50) * 500;
  //   vertex(x,y);
  //   vertex(y,x);
  //   vertex(-x,-y);
  //   // fill(255);
  //   // ellipse(x,y,100,100);
  //   // ellipse(y,x,100,100);
  // }
  // endShape();
  // pop();
  
  //island main
  push();
  scale(0.11);
  beginShape(LINES);
  strokeWeight(3);
  // let m = map(mouseX,0,400,-TWO_PI,TWO_PI);
  for(let angle = -5; angle < 100; angle += 0.1) {
      let c = lerpColor(color(0,0,255),color(0),map(angle + sin(frameCount/25),-1,1,0.1,0.14));
    let x = angle * 200;
    let y = map(sin(angle + frameCount/50),-1,1,-5,5) * 25;
      stroke(c);
    vertex(x,y);
    vertex(y,x);
    vertex(-x,y);
    // fill(255);
    // ellipse(x,y,100,100);
    // ellipse(y,x,100,100);
  }
  endShape();
  pop();
  
}
