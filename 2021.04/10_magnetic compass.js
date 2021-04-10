let c = [];
let ar;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  
  for(let i = 0; i < 9; i++) {
    c.push(new el(100,0,25,i));
  }
  
  ar = createVector(0,80);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  push();
  stroke(255);
  strokeWeight(3);
  // ar = p5.Vector.fromAngle(frameCount/50);
  // ar.setMag(0,30);
  // ar = ar.rotate(frameCount/50);
  // rotate(frameCount/50);
  // let m = map(mouseX,0,400,0,360);
  ar.rotate(radians(1));
  line(0,0,ar.x, ar.y);
  pop();
  
  push();
  for(let i = 0; i < c.length; i++) {
    let cs = c[i];
    
    let cPos = cs.pos.copy();
    let d = dist(c[i].pos.x, c[i].pos.y, int(ar.x), int(ar.y));
    
    if(d < 25) {
      fill(0,0,255);
      textSize(20);
      cs.pos.x += random(-5,5);
      cs.pos.y += random(-5,5);
    } else {
      
      //위에서 dist가 25이하면 원을 흔들도록 하고 있는데, 위치가 바뀌게 되어서 다시 원 위치를 잡아주는 알고리즘을 짰다.
      if(cs.prevPos.x != cs.pos.x && cs.prevPos.y != cs.pos.y) {
        if(cs.pos.x > cs.prevPos.x) {
          cs.pos.x -= 0.5;
        } else if(cs.pos.x < cs.prevPos.x) {
          cs.pos.x += 0.5;
        }
        
        if(cs.pos.y > cs.prevPos.y) {
          cs.pos.y -= 0.5;
        } else if(cs.pos.y < cs.prevPos.y) {
          cs.pos.y += 0.5;
        }
      }
      textSize(10);
      fill(255,0,0);
    }
    cs.show();
  }
  pop();
  // console.log(ar.x,ar.y);
}

class el {
  constructor(x,y,r,i){
    this.pos = createVector(x,y);

    this.radius = r;
    this.pos.rotate(i/TWO_PI * 4.4);
    this.prevPos = this.pos.copy();
  }
  
  show() {
    text('N',this.pos.x, this.pos.y - 80);
    text('W', this.pos.x - 100, this.pos.y);
    text('E', this.pos.x + 100, this.pos.y);
    text('S', this.pos.x, this.pos.y+80);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    textStyle(BOLD);

  }
}
