let inc = 0.01;
let scl = 20; //scale
let girdX, girdY; // girdX, girdY
let fr;
let zoff = 0;

function setup() {
  createCanvas(500, 500);
  girdX = floor((width/2) / scl);
  girdY = floor((height/2) / scl);
  pixelDensity(1);
}

function draw() {
  background(0);
  fill(255,200);
  ellipse(width/2, height/2, 300,300);
  // stroke(0);
  noStroke(); 
  // noFill();
  translate(150,150);
  let xoff = 0;
  for (let x = 0; x < girdX; x++) {
    let yoff = 0;
    for (let y = 0; y < girdY; y++) {
      let angle = noise(xoff, yoff, zoff) * 255;
      let v = p5.Vector.fromAngle(angle);

      yoff += inc;
      fill(200,100,100);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      ellipse(scl,scl,map(sin(frameCount/10),-1,1,3,30));
      pop();
      //rect(x * scl, y * scl, scl, scl);
    }
    xoff += inc;
    zoff += 0.0001;
  }
}
