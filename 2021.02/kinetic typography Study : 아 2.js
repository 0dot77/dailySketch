let myFont;
let word = "아";
let words = [];

function preload() {
  myFont = loadFont('IropkeBatangM.otf');

}

function setup() {
  createCanvas(400, 300);
  colorMode(HSB, width, height, 100);
  noCursor();
}

function draw() {
  /*
  처음에 생각은 text 함수 자체를 배열에 넣어서 전부다 루프로 돌려줄 생각이었는데 생각해보니까 text 함수의 파라미터는 text(문자, xposition, yposition)으로 이루어져 있다는 걸 감안하면 구지 전부다 넣어줄 필요가 없었다. 포지션만 새로 백터값으로 만들어서 넣어주면 마우스를 따라다니는 느낌의 배열 그림을 만들어낼 수 있다.
  */
  background('#000000');
  textFont(myFont);
  textAlign(CENTER, CENTER);
  words.push(new p5.Vector(mouseX, mouseY));

  for (let i = 0; i < words.length; i++) {
    fill(255);
    textSize(random(30, 50));
    if (words.length > 50) {
      words.splice(i, 1);
    }
    text(word, words[i].x + random(-0.5, 0.5), words[i].y + random(-0.5, 0.5));
  }
  // console.log(words.length);

}

function keyPressed() {
  saveCanvas();
}
