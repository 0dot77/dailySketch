let Boxes = [];
let numBoxes = 15;
let word1 = '내맘대로'
let word2 = 'LH땅투기'
let font;
let img;
let backText = false;

function preload() {
  font = loadFont('BlackHanSans-Regular.ttf');
  img = loadImage('unnamed.jpg');
}
function setup() {
  createCanvas(500,500);
  img.resize(200,80);
  textFont(font);
  for (let i = 0; i < numBoxes; i++) {
    Boxes.push(new Box(random(0, width-200), random(0, height - 80), 200,80));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  textSize(200);
  fill(255);
  text('꺼억', width/2, height/2);
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

  display() {
    let t = map(sin(frameCount/50), -1,1,50,100);
    
    if(!this.clicked) {
    t = 0;
    fill(255,255,0);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text(word1, this.x + 100, this.y + 40);
    } else {
    noStroke();
    fill(255,0,0,100);
    rect(this.x + 5, this.y + 5, this.w +5, this.h +5);
    image(img, this.x, this.y);
    // rect(this.x, this.y, this.w, this.h);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(t);
    text(word2, this.x + 100, this.y + 40);
    }
  }
}
