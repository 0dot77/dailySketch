let img;
let actRandomSeed = 0;
let cnv;
function preload() {
  img = loadImage('146990.jpg');
}
function setup() {
  createCanvas(img.width, img.height);
  // pg = createGraphics(400,400);
}

function draw() {
  if(frameCount % 5 == 4) {
    actRandomSeed = random(100000);
  }
  background(0,100,200);
  randomSeed(actRandomSeed);
  for(gridX = 0; gridX < img.width; gridX += 10) {
    for(gridY = 0; gridY < img.height; gridY += 10) {
     let posX = gridX;
      let posY = gridY;
      
      let c = img.get(posX,posY);
      
      push();
      translate(posX + 5,posY+ 5);
      fill(c);
      noStroke();
      ellipse(0,0,random(5,50),random(5,10));
      pop();
    }
  }
}
