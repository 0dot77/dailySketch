function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  let tileCount = 10;
  let tileW = width / tileCount;
  let tileH = height / tileCount;
  
  fill(0);


  
  triangle(0,height,width/2,0,width,height);
  for(let gridY = 0; gridY < tileCount; gridY ++){
    for(let gridX = 0; gridX < tileCount; gridX ++) {
      
      let px = gridX * tileW;
      let py = gridY * tileH;
      
      push();
      translate(px,py);
      
      // scale(1 - 3 / tileCount);
      fill(0);
      noStroke();
      fill(lerpColor(color(10,100,0),color(100,200,200),gridX/tileCount));
      rotate(radians(map(sin(frameCount/50),-1,1,0,360)));
      triangle(0,40,20,0,40,40);
      
      pop();
    }
  }
}
