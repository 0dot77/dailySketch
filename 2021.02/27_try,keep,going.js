let myFont;
let word = 'TRY,KEEP,GOING'

function setup() {
  createCanvas(400, 300);
  // textFont(myFont);
}

function draw() {
  background(0);
  textAlign(LEFT);
  fill(255);
  textSize(15);

  //단어 하나 하나를 쪼개서 배열에 넣어주고 그 배열 자체를 루프로 돌려주면?
  //쪼개서 배열에 넣어주지 않아도, charAt()함수를 이용해서 루프에 맞는 텍스트를 불러내주고, x의 위치를 바꿔주는 것으로 해결할 수 있다. 

  for (let i = 0; i < 100; i++) {
    let c = word.charAt(i);

    for (let ii = 1; ii < 11; ii++) {
      text(c, map(sin(frameCount / (250/ii)), -1, 1, 0, i * 40), ii * 30 - 10);
    }
  }
  // text(word, 10, height / 2);
}
