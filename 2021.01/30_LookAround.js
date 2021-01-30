let img;
let myFont;
let letter = ['L','O','O','K','A','R','O','U','N','D'];
let fonts = [];

function preload() {
  img = loadImage('/philip-martin-5aGUyCW_PJw-unsplash-removebg-preview.png');
  myFont = loadFont('BMHANNA_11yrs_otf.otf');
}

function setup() {
  createCanvas(500, 500);
  // background(255);


}

function draw() {
  background('rgba(0,0,0,0.4)');
  
  for(let i = 0; i < letter.length; i++) {
    let realLetter = letter[i];
    let mouse = map(mouseX,0,width,0, i * 50);
    push();
    fill(255/i);
    translate(50,130);
    textFont(myFont);
    textSize(50);
    text(realLetter,mouse,0);
    pop();
  }
  

  for (let i = 0; i < width; i += 30) {
    let mouse = map(mouseX, 0, width, -105, i);
    image(img, mouse, 0);
  }
  
  image(img, -105, 0);
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
