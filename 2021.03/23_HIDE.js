let font;
let texts = [];
let t = 'HIDE';
let count = 0;
let elSize = 100;

function preload() {
  font = loadFont('01b16381-4a45-4844-bd73-0fd120a3b9d9.otf');
}

function setup() {
  createCanvas(400, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  texts = font.textToPoints(t, width/2 - 200, height/2 + 25, 150);
}

function draw() {
  background(0);
  
  for(let i = 0; i < texts.length; i++) {
    // line(i,0,i,10);
    let tx = texts[i];
    // let r = atan(mouseY - tx.y, mouseX - tx.x);
    let d = dist(mouseX, mouseY, tx.x, tx.y);
    push();
    translate(tx.x, tx.y);
    if(d < elSize/2) {
    stroke(255);
    // rotate(r);
    } else {
    stroke(255,0);
    }
    noFill();
    // strokeWeight(randomStrokeWeight);
    curve(-100,10,map(sin(frameCount/30),-1,1,i,50),30,40,50,30,40,40,50);
    pop();
    
  
  }
  
  //detector
  noStroke();
  fill(255,100);
  let sizeUp = 1;
  if(count == 0) {
    circle(mouseX, mouseY, elSize);
  } else if(count == 1) {
    circle(mouseX, mouseY, elSize);
    elSize += sizeUp;
  } else if (count == 2) {
    circle(mouseX, mouseY, elSize);
    elSize -= sizeUp;
  }
}

function mousePressed() {
  count += 1;
  
  if(count == 3) {
    count = 0;
  }
}
