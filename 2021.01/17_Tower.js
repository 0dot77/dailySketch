function setup() {
  createCanvas(200, 600);
}

function draw() {
  background(22);
  noStroke();
  translate(width / 2, height / 2);

  for (let i = 0; i < 200; i++) {
    var rad = map(sin(i + frameCount / 50), -1, 1, -50, 50);
    let x = rad + cos(i * 5 + frameCount / 10);
    let y = rad * sin(i);

    for (let u = 0; u < 600; u += 20) {
      circle(x * map(sin(frameCount/50),-1,1,2,10), (y - height/2) + u, 10%frameCount/3);
    }
  }
}
