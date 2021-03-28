let font;
let words = 'COFFEE BEAN';
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
        points.push(new el(x,y));
      }
    }
  }
}

function draw() {
  background(255);
  let m =  constrain(map(sin(frameCount/50),-1,1,0,width),0,width);
  
  for(let i = 0; i < points.length; i++) {
    let p = points[i];
    p.edge(m);
    p.render();
  }
  
  //moving bar
  fill(0);
  rect(m,0,10,height);
}

class el {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(random(-0.5,0.5),random(-0.5,0.5));
  }
  
  edge(m) {
    if(this.pos.x > m && this.pos.x < m + 10) {
      this.pos.add(this.vel);
    } else {
      fill(54, 45, 38);
      this.pos.sub(this.vel);
    }
  }
  render() {
    noStroke();
    this.pos.add(this.vel);
    ellipse(this.pos.x, this.pos.y,5,5);
  }
}
