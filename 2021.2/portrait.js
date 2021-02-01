let inc = 0.01;
let scl = 10; //scale
let girdX, girdY; // girdX, girdY
let fr;
let zoff = 0;
let img;
let start = 0;

function preload() {
  img = loadImage('/aiony-haust-3TLl_97HNJo-unsplash-removebg-preview.png');
}

function setup() {
  createCanvas(500, 500);
  girdX = floor((width / 2) / scl);
  girdY = floor((height / 2) / scl);
  pixelDensity(1);
}

function draw() {

  loadPixels();
  // background(0);

  for (let pixelX = 0; pixelX < width; pixelX += 1) {
    let pixelXoff = start;
    for (let pixelY = 0; pixelY < height; pixelY += 1) {
      let pixelYoff = start;
      let index = (pixelX + pixelY * width) * 4;
      let n = noise(pixelXoff, pixelYoff) * 100;
      pixels[index] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 100 + n;
      pixels[index + 3] = 255;
      pixelYoff += inc;
    }
    pixelXoff += inc;
  }
  start += 0.01;
  updatePixels();
  // ellipse(width / 2 + 20, height / 2 - 40, 300, 300);
  // fill(255, 200);
  // stroke(0);
  blendMode(MULTIPLY);
  image(img, 30, 0);
  noStroke();
  // noFill();

  blendMode(BLEND);
  let xoff = 0;
  translate(150, 120);
  for (let x = 0; x < girdX; x++) {
    let yoff = 0;
    for (let y = 0; y < girdY; y++) {
      let angle = noise(xoff, yoff, zoff) * 255;
      let v = p5.Vector.fromAngle(angle);

      yoff += inc;
      fill(200, 100, 100, 50);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      ellipse(scl, scl, map(sin(frameCount / 10), -1, 1, 3, 15));
      pop();
      //rect(x * scl, y * scl, scl, scl);
    }
    xoff += inc;
    zoff += 0.0001;
  }
  if(mouseIsPressed) {
    saveCanvas();
  }
}
