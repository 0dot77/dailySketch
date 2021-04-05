let img;

function preload() {
  img = loadImage('aman-upadhyay-DvpwXNORDEw-unsplash.jpg');
}
function setup() {
  createCanvas(400, 400);
  // img.resize(width,height);
  // image(img,0,0);
  img.resize(width,height);
}

function draw() {
  background(0);
  
  
  for(let x = 0; x < width; x+= 10) {
    for(let y = 0; y < height; y+= 10) {
      let c = img.get(x,y);
      // translate(x,y);
      push();
      fill(c);
      noStroke();
      let wave = map(sin(1 - frameCount/30 + ( x*5/y*2)),-1,1,5,20);
      ellipse(x+5,y+5,wave);
      pop();
    }
  }
}
