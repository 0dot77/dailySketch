function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  textFont('Gerogia');
  textSize(20);
  
  stroke(255,0,0);
  arc(0,-10,60,60,0,180,CHORD);
  
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < 150; i++) {
    let rad = map(sin(i + frameCount), -1, 1, 50, 200);
    let x = rad * cos(i);
    let y = rad * sin(i);
    text('안녕', x, y);
    rotate(i);
  }
}
