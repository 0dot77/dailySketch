let word = 'KEEP';
let words = [];
let myFont;

function preload() {
  myFont = loadFont('Barlow-Black.otf');
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  words = myFont.textToPoints(word,width/2 - 175, height/2 + 50, 150, {
    sampleFactor : 0.4
  })
}

function draw() {
  background(0);
  rectMode(CENTER);
  for(let i = 0; i < words.length; i++) {
    let w = words[i];
    let angle = atan2(mouseY - w.y, mouseX - w.x);
    // translate(width/2 - 175, height/2 + d50);

    let c = lerpColor(color(0,100,100),color(255,100,100),(i * 0.5)/width);
    push();
    translate(w.x, w.y);
    rotate(angle);
    strokeWeight(1.5);
    stroke(c);
    rect(0,0, 10,10);
    pop();
  }
}
