let img;
let cnv;
function preload() {
  img = loadImage('146990.jpg');
}
function setup() {
  createCanvas(img.width, img.height);
  // pg = createGraphics(400,400);
}

function draw() {
  blendMode(BLEND);
  background(0,200,100);
  // randomSeed(actRandomSeed);
  for(gridX = 0; gridX < img.width; gridX += 10) {
    for(gridY = 0; gridY < img.height; gridY += 10) {
     let posX = gridX;
      let posY = gridY;
      
      let d = dist(mouseX,mouseY,posX,posY);
      
      let c = img.get(posX,posY);
      blendMode(MULTIPLY);
      push();
      translate(posX,posY);
      // strokeCap(ROUND);
      // strokeWeight(3);
      fill(c);
      noStroke();
      // strokeWeight(1.5);
      
      if(d < 50) {
        ellipse(5,5,map(tan(frameCount/20),-1,1,10,50),map(tan(frameCount/20),-1,1,10,50));
      } else {
        ellipse(5,5,10,10); 
      }
      pop();
      // console.log(c);
    }
  }
  
  blendMode(DIFFERENCE);
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,100,100);
}

