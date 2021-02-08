let myFont;
let pg;
let gap = 10;
let letter = "가";
let H_Slider,
  S_Slider,
  B_Slider;


function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  rectMode(CENTER);
  createCanvas(400, 400, P2D);
  colorMode(HSB, 100, 100, 100);
  pg = createGraphics(width, height);
  pg.background(255);
  pg.textFont(myFont);
  pg.textAlign(CENTER, CENTER);
  pg.fill(0);
  pg.textSize(200);
  pg.text(letter, width / 2, height / 2);
  // image(pg,0,0);

  H_Slider = createSlider(0, 100, 0, 0.1);
  S_Slider = createSlider(0, 100, 0, 0.1);
  B_Slider = createSlider(0, 100, 0, 0.1);
}

function draw() {
  background(0);
  let startX = 100;
  let startY = 150;
  let w = pg.textWidth(letter);
  let h = height * 0.5;
  // image(pg, 0, 0);

  // noFill();
  // stroke(0);
  // rect(startX, startY, w, h);

  // strokeWeight(3);
  stroke(255, 0, 0);
  for (let y = startY; y < startY + h; y += gap) {
    for (let x = startX; x < startX + w; x += 10) {
      let c = pg.get(x, y);
      if (brightness(c) < 10) {
        let offset = frameCount * 0.1 + (x + y) * 0.01;
        let dx = x + sin(offset) * gap * 0.8;
        let dy = y + sin(offset);
        noStroke();
        fill(255);
        rect(dx + 70, dy + 20, 30, 30);

        fill(H_Slider.value(), S_Slider.value(), B_Slider.value());
        for (let i = 0; i < 5; i++) {
          rect(dx - 5 * i, dy - 10 * i, i * 3, i * 3);
        }

      }
    }
  }

  fill(255);
  textSize(15);
  text('HUE ' + H_Slider.value(), 0, 360);
  text('SATURATION ' + S_Slider.value(), 0, 380);
  text('BRIGHTNESS ' + B_Slider.value(), 0, 400);
  // if(frameCount%60 == 59) {
  //   console.log(H_Slider.value())
  // }
}

function keyPressed() {
  saveCanvas();
}
