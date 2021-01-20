let myFont;
let fontArray;
let letter = "바다";
let r = 0;

function preload() {
  myFont = loadFont('asset/dohyon.otf');
}

function setup() {
  createCanvas(400, 400);
  fontArray = myFont.textToPoints(letter, width / 2, height / 2, 100, {
    sampleFactor: 0.5
  })
}

function draw() {
  background(0, 100, 200);
  fill(0);
  for (let i = 0; i < fontArray.length; i++) {
    let p = fontArray[i];
    push();
    translate(p.x, p.y);
    line(-80 / map(mouseX,0,400,0,10),5,-70,map(mouseY,0,400,0,10));
    pop();
  }
}
