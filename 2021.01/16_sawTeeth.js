function setup() {
  createCanvas(400, 400);
  //angle value
  s1 = createSlider(0, 360, 180, 1);
  //rad1 value
  s2 = createSlider(10, 300, 150, 2);
  //rad2 noise speed
  s3 = createSlider(10, 200, 50, 10);
}

function draw() {
  background(100);

  translate(width / 2, height / 2);
  strokeWeight(2);
  // stroke(map(sin(frameCount / 10), -1, 1, 0, 200), 0, 0, 100);
  strokeCap(ROUND);
  beginShape();
  for (let angle = 0; angle <= s1.value(); angle++) {
    var rad1 = 100 + map(noise(angle + frameCount / s2.value()), 0, 1, 0, 100);
    var x1 = rad1 * cos(angle);
    var y1 = rad1 * sin(angle);

    var rad2 = 30 + map(noise(angle + frameCount / s3.value()), 0, 1, 0, 100);
    var x2 = rad2 * cos(angle);
    var y2 = rad2 * sin(angle);
    // line(x2, y2, x1, y1);

    push();
    stroke(0);
    vertex(x1, y1);
    vertex(x2, y2);
    pop();
  }
  endShape();

}
