function setup() {
  createCanvas(400, 400);
  background(255, 222, 23);
  noStroke();
  fill(0);
  var x = width / 2,
    y = height / 2;

  fill(0);
  arc(x, y, 300,300, -PI/2,PI/6);
  fill(33,64,154);
  arc(x, y, 170, 170, -PI / 2, PI - PI / 4.1);
  fill(0);
  arc(x, y, 140, 140, -PI / 2, PI / 2);
  fill(255);
  arc(x, y, 110, 110, -PI / 2, PI / 2);
  fill(0);
  arc(x, y, 80, 80, -PI / 2, 0);
  fill(255);
  ellipse(x, y, 50);

  stroke(190,30,45);
  for (var lineY = 0; lineY < height; lineY += 10) {
    line(0, lineY, width / 2, height / 2);
  }
  
  for(var lineX = width/2; lineX <= width; lineX += 5) {
    line(lineX, height/2,lineX,height);
  }
}

function draw() {
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
