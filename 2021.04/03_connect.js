let pg;
let font;
let w;

function preload() {
  font = loadFont('01b16381-4a45-4844-bd73-0fd120a3b9d9.otf');
}

function setup() {
  cursor(CROSS);
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textFont(font);
  pg = createGraphics(width, height);
  pg.textFont(font);
  pg.background(0);
  
  w = font.textToPoints('CONNECT', width/2 - 171.7, height/2 + 40, 80, {
    sampleFactor : 0.2
  });                   
}

function draw() {
  
  image(pg,0,0);
  pg.background(0);
  for(let i = 0; i < w.length; i++) {
    pg.noStroke();
    
    
    let d = dist(mouseX,mouseY,w[i].x, w[i].y);
    
    if(d < 30) {
      pg.push();
      pg.fill(0,255,0);
      pg.ellipse(w[i].x, w[i].y - 100,map(sin(1-frameCount/50),-1,1,7,2));
      pg.ellipse(w[i].x, w[i].y + 100,map(sin(1-frameCount/50),-1,1,7,2));
      pg.pop();
    } else {
      pg.fill(255,0,0);
      pg.ellipse(w[i].x, w[i].y,5,5);
    }
  }
  
  stroke(0);
  noFill();
  textSize(80);
  strokeWeight(5);
  text('CONNECT',width/2,height/2);
}
