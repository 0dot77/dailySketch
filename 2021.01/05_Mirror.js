let fl,
  stars,
  numStars,
  centerZ,
  radius,
  baseAngle,
  rotationSpeed;

function setup() {
  createCanvas(400, 800);
  fl = 300;
  stars = [];
  numStars = 100;
  centerZ = 1000;
  radius = 1000;
  baseAngle = 0;

  for (var i = 0; i < numStars; i += 1) {
    var star = {
      x: random(-200, 200),
      y: random(-200, 200),
      z: random(0, 5000)
    };
    stars.push(star);
  }
  translate(width / 2, height / 2);
}

function draw() {
  background(0, 0, 100, 100);
  translate(width / 2, height / 2);
  noStroke();
  fill(255, 50, 0, 100);
  ellipse(0, 0, 400);
  ellipse(0, -200, 100);
  ellipse(0, 200, 100);
  ellipse(0, 300, 300,100);
  ellipse(0, -300, 300,100);
  for (var y = -height; y < height; y += 100) {
    fill(255, 0, 0, 88);
    ellipse(0, y, 30, 100);
    ellipse(200, y, 30, 100);
    ellipse(-200, y, 30, 100);
  }

  for (var i = 0; i < numStars; i += 1) {
    var star = stars[i],
      perspective = fl / (fl + star.z);

    push();
    fill(255,250,0,200);
    scale(perspective, perspective);
    ellipse(-star.z, star.x, 10, 10);
    ellipse(star.z, star.x, 10, 10);
    pop();

    star.z -= 10;
    if (star.z < 0) {
      star.z = 5000;
    }
  }
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
