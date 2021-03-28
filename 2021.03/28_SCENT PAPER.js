let Boxes = [];
let numBoxes = 15;
let font1;
let font2;

let s = "SCENT";

let backText = false;
let boxW = 200;
let boxH = 40;
function preload() {
  font1 = loadFont('BlackHanSans-Regular.ttf');
  font2 = loadFont('DancingScript-VariableFont_wght.ttf');
}
function setup() {
  createCanvas(500,500);
  textFont(font1);
  for (let i = 0; i < numBoxes; i++) {
    Boxes.push(new Box(random(0, width-boxW), random(0, height - boxH), boxW,boxH));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(242,230,81);
  for(let i = 0; i < Boxes.length; i++) {
    Boxes[i].display();
  }
  
}

function mouseReleased() {
  backText = false;
  for(let i = 0; i < Boxes.length; i++) {
    Boxes[i].clicked = false;
  }
}

function mouseDragged() {
  for(let i = 0; i < Boxes.length; i++) {
    Boxes[i].update();
  }
}

function mousePressed() {
  backText = true;
  let idx = -1;
  for(let i = Boxes.length-1; i >= 0; i--) {
    Boxes[i].checkClicked(mouseX,mouseY);
    
    if(Boxes[i].clicked) {
      idx = i;
      break;
    }
  }
  
  if(idx != -1) {
    let last = Boxes[idx];
    for(let i = idx + 1; i < Boxes.length; i++) {
      Boxes[i-1] = Boxes[i];
    }
    Boxes[Boxes.length-1] = last;
  }
}
class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    //클릭했는지 안했는지 검사할 수 있는 BOOL
    this.clicked = false;
  }

  update() {
    if (this.clicked) {
      let dx = mouseX - pmouseX;
      let dy = mouseY - pmouseY;

      this.x += dx;
      this.y += dy;
    }
  }

  checkClicked(cx, cy) {
    if (cx > this.x && cx < this.x + this.w && cy > this.y && cy < this.y + this.h) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }
  
  scent() {
    this.pos.add(this.vel);
    push();
    translate(this.pos.x + 100, this.pos.y + 20);
    for(let i = 0; i < s.length; i++) {
      rotate(radians(360/s.length));
      text(s[i], 100,0);
    }
    pop();
  }

  display() {
    
    if(!this.clicked) {
    this.pos.set(this.x, this.y);
    fill(129,228,189);
    noStroke();
    textFont(font2);
    textSize(25);
    rect(this.x, this.y, this.w, this.h,30,30);
    fill(0);
    text('SCENT PAPER', this.x + 30, this.y + 25);  
    } else {
    noStroke();
    fill(230,179,192);
    textSize(100);
    this.scent(); 
    rect(this.x, this.y, this.w, this.h,30,30);
    }
  }
}
