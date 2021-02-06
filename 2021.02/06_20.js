function setup() {
  createCanvas(400,400);
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(DIFFERENCE);
  textFont('Permanent Marker');
  fill(0,0,200);
  textSize(500);
  text('20',width/2, height/2 + 180);

  textFont('Permanent Marker');
  textAlign(CENTER);
  textSize(50);

  for (let x = 0; x <width; x += 100) {
    for (let y = 0; y <height; y += 50) {
      fill(255);
      text('2', x + 25, y + 45);
      fill(255);
      noStroke();
      ellipse(x + 50,y,45,45);
      fill(255);
      ellipse(x + 50,y,25,25);
    }
  }
}
