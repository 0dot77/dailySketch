let word = 'GOOD BYE';
let font;
let sizeDown = 1;
let sizeBool = false;

function preload() {
  font = loadFont('LuckiestGuy-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(80);
}

function mousePressed() {
  sizeBool = true;
}

function draw() {
  background(255 * sizeDown);
  translate(width / 2, height / 2);

  push();


  if (sizeBool) {
    sizeDown -= 0.001;

    if (sizeDown < 0) {
      sizeBool = false;
    }
  }
  scale(sizeDown);
  text(word, 0, 0);
  pop();

  push();
  noFill();
  if (sizeDown < 0) {
    stroke(255);
  } else {
    stroke(0);
  }

  text(word, 0, 0);
  pop();
}
/* 할아버지가 곧 돌아가시게 된다.
나는 어떤 마음으로 세상을 다시 받아드려야 할까 고민을 해봤다. 슬픔이라는 감정에 빠져서 내 할 일을 못하는 걸 할아버지가 보면 좋아하실까? 아버지가 음악하는 걸 그렇게 뜯어말리던 할아버지는, 내가 예술한다는 걸 말리지 않았다. 되려 자신감 있게 하라며. 그리고 우리 집안의 기둥이라고 응원해주셨다. 아무것도 못하는 지금의 나지만, 내가 매일 해내는 것에서 할아버지를 기릴 수 있는 방법이 뭘까 고민했다. 고작 텍스트로 보일 수 있지만, 할아버지가 이제는 더 이상 나를 바라볼 수 조차 없다는 사실을 알게 됐을때. 아득했고, 허하고, 그리웠다. 하지만 그럼에도 불구하고 나아가야 한다는 생각을 했다. 할아버지는 분명 내게 그렇게 말했을 거다. */ 
