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
//   if(frameCount % 5 == 4) {
//     actRandomSeed = random(100000);
//   }
  
  background(0,200,100);
  // randomSeed(actRandomSeed);
  
  let mx = map(mouseX,0,400,200,15);
  let my = map(mouseY,0,400,200,15);
  
  let cmx = constrain(mx,15,200);
  let cmy = constrain(my,15,200);
  for(gridX = 0; gridX < img.width; gridX += cmx) {
    for(gridY = 0; gridY < img.height; gridY += cmy) {
     let posX = gridX;
      let posY = gridY;
      
      let c = img.get(posX,posY);
      
      push();
      translate(posX,posY);
      // strokeCap(ROUND);
      // strokeWeight(3);

      fill(c);
      noStroke();
      triangle(0,20,10,0,20,20);
      
      stroke(c);
      noFill();
      strokeWeight(1.5);
      ellipse(10,10,30,30);
      pop();
      // console.log(c);
    }
  }
}
