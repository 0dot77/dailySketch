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
  
  stroke(0,170,200);
  strokeWeight(4);
  for (let i = 0; i < 150; i++) {
    let rad = map(sin(i + frameCount), -1, 1, 100, 200);
    // let rad = 100;
    let x = rad * tan(i) - 20;
    let y = 10 + rad * sin(i);
    text('안녕', x, y);
    rotate(i%map(mouseX,0,400,0,50));
  }
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
