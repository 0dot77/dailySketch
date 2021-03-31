let NORTH = 0;
let NORTHEAST = 1;
let EAST = 2;
let SOUTHEAST = 3;
let SOUTH = 4;
let SOUTHWEST = 5;
let WEST = 6;
let NORTHWEST = 7;
let direction;

let stepSize = 1;
let diameter = 4;

let posX;
let posY;

let pg;
let font;


function preload() {
  font = loadFont('EastSeaDokdo-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  pg = createGraphics(width,height);
  pg.textFont(font);
  pg.background(255,0);
  pg.fill(0);
  pg.textSize(80);
  pg.textAlign(CENTER, CENTER);
  pg.text('얽히고 설키고', width/2, height/2);
  
  posX = width/2;
  posY = height/2;
}

function draw() {
  
  //반복의 횟수를 조절해서 mouseX의 값이 작으면 당연히 값 자체가 많이 들어오지 않으므로 현 위치에서 머물게 되고, 값이 커지면 반복 횟수가 늘어나기 때문에 다양한 위치로 이동하게 될 가능성이 커지게 된다.
  
  for(let i = 0; i <= mouseX; i++) {
    direction = int(random(0,8));
    
    if(direction == NORTH) {
      posY -= stepSize;
    } else if(direction == NORTHEAST) {
      posX += stepSize;
      posY -= stepSize;
    } else if(direction == EAST) {
      posX += stepSize;
    } else if(direction == SOUTHEAST) {
      posX += stepSize;
      posY += stepSize;
    } else if(direction == SOUTH) {
      posY += stepSize;
    } else if(direction == SOUTHWEST) {
      posX -= stepSize;
      posY += stepSize;
    } else if(direction == WEST) {
      posX -= stepSize;
    } else if(direction == NORTHWEST) {
      posX -= stepSize;
      posY -= stepSize;
    }
    
    if(posX > width) posX = 0;
    if(posX < 0) posX = width;
    if(posY < 0) posY = height;
    if(posY > height) posY = 0;
    
    let my = map(mouseY,0,400,5,10);
    let mx = map(mouseX,0,400,0,255);
    fill(random(mx),random(mx),random(mx));
    ellipse(posX + stepSize/2, posY + stepSize/2, my,my);
  }
  
  push();
  image(pg,0,0);
  pop();
}
