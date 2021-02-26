let duration = [];
let count;
let pickWords = ['literate','try','keep','going'];

//word ; literate try keep going 

function setup() {
  createCanvas(400, 300);
  background(255);
}

function draw() {
  // background(255);

  fill(0);

  duration = [frameCount / 50, frameCount / 30, frameCount / 80, frameCount / 10];

  for (let y = 0; y < height; y += 100) {
    count = 0;
    for (let x = 0; x < width; x += 100) {
      let r0 = new rule2(x, y, 200, 200, duration[count],pickWords[count]);

      count += 1;

      if (count == 4) {
        count = 0;
      }
      r0.render();
    }
  }
}

function rule2(x, y, sizeW, sizeH, pickDuration, pickWords) {
  this.pos = {
    x: x,
    y: y
  };
  this.sizeW = sizeW;
  this.sizeH = sizeH;
  this.pickDuration = pickDuration;
  this.pickWords = pickWords;


  this.render = function() {
    noStroke();
    fill(0);
    rect(this.pos.x, this.pos.y, this.sizeW + 5, this.sizeH);
    let c = map(sin(this.pickDuration), -1, 1, 0, 255);
    fill(c);

    arc(this.pos.x + this.sizeW / 2, this.pos.y + this.sizeH / 2, this.sizeW, this.sizeH, 0, radians(map(sin(this.pickDuration), -1, 1, 180, 270)), PIE);

    if (int(c) > 200) {
      fill(255,0,0);
      textSize(20);
      textAlign(LEFT, CENTER);
      text(this.pickWords, this.pos.x, this.pos.y + 10);
    }
  }
}
