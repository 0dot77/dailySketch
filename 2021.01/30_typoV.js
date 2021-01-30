let myFont;
let letter = 'TYPO'
let myFontNum = 9;
let myFonts1 = [];
let myFonts2 = [];

function preload() {
  myFont = loadFont('/BMHANNA_11yrs_otf.otf');
}

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < myFontNum; i++) {
    myFonts1[i] = new typo(0, 0, 50);
    myFonts2[i] = new typo(0, 0, 50);
  }
}

function draw() {
  background(0);
  // textFont(myFont);
  // textSize(50);
  // fill(255);

  // for (let x = 0; x <= width; x += width/6) {
  //   for (let y = -10; y < height; y += height / 12) {
  //     push();
  //     translate(x,y);
  //     text(letter, x, y);
  //     pop();
  //   }
  // }

  fill(255);
  let mouse = map(mouseX, 0, 400, 0, 27);
  for (let i = 0; i < myFonts1.length; i++) {
    let myRealFonts1 = myFonts1[i];
    translate(mouse, 43);
    push();
    fill(255 / i)
    myRealFonts1.render();
    pop();
  }

  for (let u = 0; u < myFonts2.length; u++) {
    let myRealFonts2 = myFonts2[u];
    translate(mouse, -43.4);
    push();
    fill(255/u)
    myRealFonts2.render();
    pop();
  }
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}

class typo {
  constructor(x, y, size) {
    textFont(myFont);
    textSize(size);

    this.x = x;
    this.y = y;
  }

  render() {
    text(letter, this.x, this.y);
  }
}
