function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  translate(width/2, height/2);
  
  //island main
  push();
  scale(0.5);
  beginShape(LINES);
  strokeWeight(5);
  let m = map(mouseX,0,400,20,100);
  for(let angle = -5; angle < 100; angle += 0.25) {
      let c = lerpColor(color(0,0,255),color(255,0,0),map(angle + sin(frameCount/25),-1,1,0.1,0.118));
    let x = angle * m;
    let y = map(sin(angle + frameCount/50),-1,1,-5,5) * 5;
    stroke(c);
    vertex(x - 200,y - 200);
    vertex(y - 200,x - 200);
    // vertex(-x,-y);
    // fill(255);
    // ellipse(x,y,100,100);
    // ellipse(y,x,100,100);
  }
  endShape();
  pop();
  
}
