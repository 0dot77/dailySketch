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

  let num1 = floor(map(sin(frameCount / 50), -1, 1, 0, word.length));
  let num2 = floor(map(sin(frameCount / 50), 1, -1, 0, word.length));
  let c1 = word.charAt(num1);
  let c2 = word.charAt(num2)

  textSize(50);
  fill('#000000');
  circle(width / 2 - 130, height / 2, map(sin(frameCount / 50), -1, 1, 50, 200));
  circle(width / 2 + 135, height / 2, map(sin(frameCount / 50),-1,1,50,200));

    fill('#FFFFFF'); textSize(map(sin(frameCount / 50), -1, 1, 50, 100)); text(c2, width / 2 + 135, height / 2); textSize(map(sin(frameCount / 50), -1, 1, 50, 100)); text(c2, width / 2 - 130, height / 2);

    fill('#000000'); textSize(200); textAlign(CENTER, CENTER); push(); translate(width / 2 + 10, height / 2 - 10); text(c1, 0, 0); pop();
  }

  function keyPressed() {
    saveCanvas();
  }
