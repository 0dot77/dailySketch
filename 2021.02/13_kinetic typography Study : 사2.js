let myFont;
let word = "사삭산삳살삼삽삿상샂샃샄샅샆샇";

function preload() {
  myFont = loadFont('IropkeBatangM.otf');

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#FFFFFF');
  let circleSize = 100;

  let num = floor(map(sin(frameCount / 50), -1, 1, 0, word.length));
  let c = word.charAt(num);

  textSize(50);
  fill('#000000');
  ellipse(width/2 - 130, height / 2, circleSize, circleSize);
  ellipse(width/2 + 135, height / 2, circleSize, circleSize);
  
  fill('#FFFFFF');
  text(c, map(sin(frameCount / 50), -1, 1, circleSize / 2, width - circleSize / 2), height / 2);
  
  fill('#000000');
  textSize(200);
  textAlign(CENTER, CENTER);
  push();
  translate(width / 2 + 10, height / 2 - 10);
  text(c, 0, 0);
  pop();
}
function keyPressed() {
  saveCanvas();
}
