var x,
  y,
  r,
  moveY,
  startoff,
  inc,
  n,
  Px,
  Py,
  c,
  count;

let ca;
function setup() {
  ca = createCanvas(400, 800);
  colorMode(HSB);
  angleMode(DEGREES);
  x = 0;
  y = 390;
  r = 20;
  moveY = 5;
  startoff = 200;
  inc = 0.3;
  c = 20;
  n = 0;
  count = 0;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  count += 1;

  //grid
  for (var gridX = -200; gridX <= 200; gridX += 10) {
    for (var gridY = -400; gridY <= 400; gridY += 10) {
      stroke(255);
      strokeWeight(1);
      line(gridX, gridY, gridX, gridY);
    }
  }

  //BAR
  stroke(255);
  line(0, -400, 0, 400);

  //circle
  noStroke();
  fill(255);
  ellipse(x, y, r);
  y -= moveY;
  if (y <= -400 + r / 2 || y >= 400 - r / 2) {
    moveY *= -1;
  }

  // interaction
  if (y <= 400 && y > 0) {
    stroke(count % 255, 255, 255);
    beginShape();
    var xoff1 = startoff;
    noFill();
    for (var x1 = 0; x1 >= -200; x1--) {
      var n1 = map(noise(xoff1), 0, 1, 0,500);
      var s1 = map(sin(xoff1), -1, 1, -400, 400);
      var y1 = s1 + n1;
      vertex(x1, y1);
      xoff1 += inc;
    }
    endShape();
    beginShape();
    var yoff1 = startoff;
    for(var y2 = -400; y2 <= 400; y2 ++) {
      var n2 = map(noise(yoff1), 0, 1, 0,200);
      var s2 = map(cos(yoff1),-1,1,0,50);
      var x2 = n2 + s2;
      vertex(x2, y2);
      yoff1 += inc;
    }
    endShape();
    startoff += inc;
  } else {
    strokeWeight(1);
  }

  if (y < 0 && y >= - 400) {   
    var a1 = n * 137.5;
    var Pr = c * sqrt(n);
    var Px = Pr * cos(a1);
    var Py = Pr * sin(a1);
    
    fill(n % 255, 255, 255);
    ellipse(Px,Py,50);
    n++;
  } else {
    strokeWeight(1);
    n = 0;
  }
  
  if(mouseIsPressed) {
    saveCanvas(ca, 'jpg');
  }
}
