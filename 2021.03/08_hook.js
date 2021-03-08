function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noCursor();
  let tileCount = 5;
  let tileW = width / tileCount;
  let tileH = height / tileCount;
  
  fill(100,255,0);
  noStroke();
  ellipse(mouseX,mouseY,50,50);
  for(let gridY = 0; gridY < tileCount; gridY ++) {
    for(let gridX = 0; gridX < tileCount; gridX ++) {
      let px = gridX * tileW;
      let py = gridY * tileH;
      let angle = atan2(mouseY-py, mouseX - px );
      //guideLine
      // push();
      //       translate(px , py );
      // rect(0,0,80,80);
      // pop();
      
      push();

      translate(px + tileW/2 , py );
      rotate(angle);
      fill(100,0,0);
      noStroke();
      beginShape();
      fill(lerpColor(color(100,50,0),color(255,255,100),map(mouseX,0,width,0,0.5)));
      vertex(30,0);
      vertex(80,0);
      vertex(50,30);
      vertex(0,30);
      vertex(30,0);
      vertex(30,60);
      vertex(80,60);
      vertex(50,80);
      vertex(0,80);
      vertex(0,30);
      endShape();
      pop();
    }
  }
}
