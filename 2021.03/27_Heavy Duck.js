let font;
let words = 'Heavy Duck';
let points =[];
let gridSize = 3;

function preload() {
  font = loadFont('ChunkFive-Regular.otf');
}

function setup() {
  createCanvas(400, 400);
  textFont(font);
  background(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  text(words, width/2, height/2);
  
  loadPixels();
  for(let y = 0; y < height; y +=gridSize) {
    for(let x = 0; x < width; x+= gridSize) {
      let px = get(x,y);
      let r = px[0];
      
      if(r < 127) {
        points.push(createVector(x,y));
      }
    }
  }
}

function draw() {
  background(0);
    let m = constrain(map(sin(frameCount/50),-1,1,0,width),0,width);
  
  for(let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    
    if(x > m && x < m + 10) {
      fill(random(255),random(255),random(255));
    } 
    ellipse(x,y,2.5,2.5);
  }
  
  //moving bar

  rect(m,0,10,height);
}
