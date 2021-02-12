let myFont;
let letter = "마";

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

let points1;
let points2;
let points3;

function setup() {
  createCanvas(400, 400, P2D);
  // colorMode(HSB, 100, 100, 100);
  points1 = myFont.textToPoints(letter, 100, 250, 200, {
    sampleFactor: 0.05
  });
  points2 = myFont.textToPoints(letter, 100, 250, 100, {
    sampleFactor: 0.5
  });

  points3 = myFont.textToPoints(letter, 100, 250, 100, {
    sampleFactor: 0.3
  });
}

function draw() {
  background(0, 0, 0, 50);

  let p1 = new pointText(points1);
  fill(0, 100, 200);
  p1.show(1);

  let p2 = new pointText(points2);
  fill(100, 200, 0);
  p2.show(3);

  let p3 = new pointText(points3);
  fill(200, 0, 100);
  p3.show(4);
  // for (let i = 0; i < points1.length; i++) {
  //   let pts = points1[i];

  //wave의 느낌을 탄젠트를 써서 줄 때, easeing function으로 제어하는 효과를 줄 수 있다. 
  //     let wave = map(tan(frameCount / 50), -1, 1, 0, 30);
  //     noFill();
  //     stroke(255 / i, 100, 100);
  //     ellipse(pts.x + wave, pts.y, 20, 20);
  //   }
  // }
}

function pointText(textArr) {
  this.arr = textArr;
  noStroke();
  this.show = function(waveForm) {
    for (let i = 0; i < this.arr.length; i++) {
      let wave;
      let sizeWave = map(sin(frameCount / 10), -1, 1, 0, 30);
      let pts = this.arr[i];

      switch (waveForm) {
        case 1:
          wave = map(sin(frameCount / 50), -1, 1, -30, 60);
          ellipse(pts.x + wave, pts.y, sizeWave, sizeWave);
          break;
        case 2:
          wave = map(cos(frameCount / 50), -1, 1, -30, 30);
          ellipse(pts.x + wave, pts.y, 20, 20);
          break;
        case 3:
          wave = map(tan(frameCount / 50), -1, 1, -30, 30);
          ellipse(pts.x + wave, pts.y, 10, 10);
          break;
        case 4:
          wave = map(tan(frameCount / 50), 1, -1, 90, 120);
          ellipse(pts.x + wave, pts.y, 10, 10);
          break;
      }
      // let wave = map(tan(frameCount / 50), -1, 1, 0, 30);

    }
  }
}

function keyPressed() {
  saveCanvas();
}
