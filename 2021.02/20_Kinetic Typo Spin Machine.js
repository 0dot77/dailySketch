let myFont;
let word = '하';
let inp;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 300);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  noCursor();

  inp = createInput('');
}

function draw() {

  background(255);

  for (let i = 0; i < 100; i++) {
    push();
    textSize(100);
    fill(random(255),random(255),random(255));
    translate(width / 2 + i / 10, height / 2 + i / 2);
    rotate(frameCount / 50);
    text(inp.value(), 0, -30);
    pop();
  }

  // console.log(inp.value());
}

function mousePressed() {
  saveCanvas();
}
