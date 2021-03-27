let font;
let letters;
let c = [];
let pos, vel;
function preload() {
  font = loadFont('CaslonSemiBoldItalic.otf');
}
function setup() {
  createCanvas(400, 400);
  
  textAlign(CENTER, CENTER);
  let options = {
    x : width/2 - 100,
    y : height/2 + 25,
     fontSize : 100,
    sampleFactor : 2
  }
  
  // for(let i = 0; i < 50; i++) {
  //   c.push(new TextRain(random(width/2),random(height/2),random(3,5)));
  // }
  letters= textToShapes(font, 'glitch', options);
  // letters = font.textToPoints('GLITCH', width/2-180, height/2+25, 100);
  // textSize(30);
  rectMode(CENTER);
}

function draw() {
  background(0);
  let rectX = map(sin(frameCount/50),-1,1,0,width);
  let rectY = height/2 -10;
  let m = map(sin(frameCount/50),-1,1,50,100);
  
  push();
  stroke(255);
  noFill();
  ellipse(rectX,rectY, m, m);
  pop();
  push();
  
  for(let i = 0; i < letters.length; i++) {
    let shapes = letters[i];
    for(let j = 0; j < shapes.length; j++) {
      let shape = shapes[j];
      
      for(let k = 0; k < shape.length; k ++) {
      pos = createVector(shape[k].x, shape[k].y);
        
      let d = dist(rectX,rectY,pos.x, pos.y);
        
        if(d < m/2) {
          pos.x += random(-5,5);
          stroke(random(255),random(255),random(255));
          // pos.y += random(-2,2);
        } else {
          stroke(255);
        }
      beginShape();
      vertex(pos.x, pos.y);
      endShape(CLOSE);
      }
      }
  }
  pop();
}
