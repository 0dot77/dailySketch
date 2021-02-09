let myfont;
let letter = 'BLUE';

function preload() {
  myfont = loadFont('ApfelGrotezk-Regular.otf');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  frameRate(3);
  textSize(20);
  textFont(myfont);
  fill(255,0,0);
  //typo의 경우에는 y값을 먼저 루프로 사용하는 것이 좋은 것 같다. 아무래도 y값을 먼저 루프시켜주다보니, y를 기반으로 x 값을 잡기 때문에 typo 위 아래 간격 조정이 용이하다.
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 50) {
      text(letter, x + 2.5, y + 15);
      
      let randomColor = int(random(0,255));
      
      if(randomColor > 100 && frameCount%3 == 2) {
        fill(0,0,255);
      } else {
        fill(255,0,0);
      }
    }
  }
}
