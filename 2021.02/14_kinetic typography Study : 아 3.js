let myFont;
let word = ['아', '에', '이', '오', '우', '어'];
let mouseSwitch = false;
let mousePressedCount = 0;
let w = [];
let circleSizeDecent = 1;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');

}

function setup() {
  createCanvas(400, 300);
  textFont(myFont);
  // colorMode(HSB, width, height, 100);
  noCursor();
  for (let i = 0; i < word.length; i++) {
    w[i] = myFont.textToPoints(word[i], width / 2 - 100, height / 2 + 60, 200, {
      sampleFactor: 0.05
    })
  }
}

function draw() {
  background('#000000');
  let circleSize = 30;
  noStroke();
  if (mouseSwitch === false) {
    initialPage();
  } else if (mouseSwitch === true) {
    switch (mousePressedCount) {
      //아
      case 1:
        for (let word0 = 0; word0 < w[0].length; word0++) {
          fill(255);
          circle(w[0][word0].x + map(sin(frameCount / 50 + word0), -1, 1, -3, 3), w[0][word0].y, circleSize);
        }
        break;
        //에
      case 2:
        for (let word1 = 0; word1 < w[1].length; word1++) {
          fill(255);
          circle(w[1][word1].x, w[1][word1].y, map(tan(frameCount / 50), -1, 1, 1, 5));
        }
        break;
        //이
      case 3:
        for (let word2 = 0; word2 < w[2].length; word2++) {
          fill(255);
          circle(w[2][word2].x + map(tan(frameCount / 50 + word2), -1, 1, -5, 5), w[2][word2].y, circleSize);
        }
        break;
        //오
      case 4:
        push();
        fill(255);
        textSize(15);
        text('"R"키를 누르면 빨간색으로 바뀝니다.\n"G"키를 누르면 초록색으로 바뀝니다.\n"B"키를 누르면 파란색으로 바뀝니다.', width / 2 - 190, height / 2 + 100);
        pop();

        for (let word3 = 0; word3 < w[3].length; word3++) {
          let c = map(sin(word3 + frameCount / 50), -1, 1, 0, 255);

          if (keyIsPressed) {
            switch (keyCode) {
              case 82:
                fill(c, 0, 0);
                break;
              case 71:
                fill(0, c, 0);
                break;
              case 66:
                fill(0, 0, c);
                break;
            }
          }
          circle(w[3][word3].x, w[3][word3].y, circleSize);
        }
        break;
        //우
      case 5:
        for (let word4 = 0; word4 < w[4].length; word4++) {
          circle(w[4][word4].x, w[4][word4].y, circleSize / 2 + map(sin(word4 + frameCount / 50), -1, 1, 1, 20));
        }
        break;
        //어
      case 6:
        for (let word5 = 0; word5 < w[5].length; word5++) {
          let mapColor = map(word5,0,w[5].length,0,255);
          fill(mapColor,mapColor,mapColor,255);
          circle(w[5][word5].x + map(sin(frameCount/50),-1,1,-10, 10), w[5][word5].y  + map(cos(frameCount/50),-1,1,-10, 10), circleSize / 2);
        }
    }
  }
}

function initialPage() {
  background('#000000');
  fill('#ffffff');
  textSize(30);
  text('마우스를 눌러주세요!\n MOUSE PRESSED!', width / 2 - 125, height / 2 - 5);
}

function mainEvent() {

}

function mousePressed() {
  mouseSwitch = true;
  mousePressedCount += 1;

  if (mousePressedCount === 7) {
    mousePressedCount = 0;
  }
}
