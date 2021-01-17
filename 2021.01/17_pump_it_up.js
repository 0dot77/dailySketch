function setup() {
  createCanvas(400, 400);
  s1 = createSlider(0, 360, 50, 1);
  s2 = createSlider(10, 300, 150, 2);
  s3 = createSlider(10, 200, 50, 10);
}

function draw() {
  background(100,132,88);

  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(map(sin(frameCount / 10), -1, 1, 0, 200), 0, 0);
  strokeCap(ROUND);
  beginShape();
  for (let angle = 0; angle <= s1.value(); angle++) {

    if (frameCount % 60 == 30) {
      fill(random(255), random(255), random(255));
    }
    var rad1 = 100 + map(noise(angle + frameCount / s2.value()), 0, 1, 0, 100);
    var x1 = rad1 * cos(angle);
    var y1 = rad1 * sin(angle);
    ellipse(x1, y1, 10, 10);

    var rad2 = 30 + map(noise(angle + frameCount / s3.value()), 0, 1, 0, 100);
    var x2 = rad2 * cos(angle);
    var y2 = rad2 * sin(angle);
    ellipse(x2, y2, 20, 20);

    line(x1, y1, x2, y2);
    //     push();
    //     stroke(0);
    //     vertex(x1, y1);
    //     vertex(x2, y2);
    //     pop();
  }
  endShape(CLOSE);
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
