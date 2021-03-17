// ***** MADE BY @Carfree.sun (TaeYang Yoo) ***** //

//----------------------//
// INSPIRE || REFERENCE //
//                      //
//----------------------//

//----------------------//
// START MY GLOBAL SET  //
//----------------------//

// using Loop tool
let percent;
let totalFrames = 60;
let footMain, foot1, foot2, foot3;
let foots = [];

//----------------------//
// **    PRELOAD    **  //
//----------------------//

function preload() {
  
}


//----------------------//
// **     SET UP     ** //
//----------------------//

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  background(62, 89, 70);
  noCursor();
  percent = (1*(frameCount-1)/totalFrames)%1;
  
  for(let i = 0; i < foots.length ;i ++) {
    let f = foots[i];
    f.render();
  }
  //basic shape
  push();
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,100,100);
  ellipse(mouseX - 65, mouseY - 70, 65,65);
  ellipse(mouseX, mouseY - 80, 50,50);
  ellipse(mouseX + 60, mouseY - 60, 50,50);
  pop();
}

function mouseReleased() {
  foots.push(new foot());
}

function foot() {
  this.footMain = createVector(mouseX, mouseY);
  this.foot1 = createVector(mouseX-65, mouseY -70);
  this.foot2 = createVector(mouseX, mouseY - 80);
  this.foot3 = createVector(mouseX + 60, mouseY - 60);
  
  this.update = function() {
    
  }
  
  this.render = function() {
    noStroke();
    fill(0);
    ellipse(this.footMain.x, this.footMain.y, 100, 100);
    fill(82, 37, 24);
    ellipse(this.foot1.x, this.foot1.y, 65, 65);
    fill(255);
      textSize(30);
    text('꼼', this.foot1.x, this.foot1.y);
    fill(82, 37, 24);
    ellipse(this.foot2.x, this.foot2.y, 50, 50);
    fill(255);
      textSize(25);
    text('지', this.foot2.x, this.foot2.y);
    fill(82, 37, 24);
    ellipse(this.foot3.x, this.foot3.y, 50, 50);
    fill(255);
      textSize(25);
    text('락', this.foot3.x, this.foot3.y);
  }
}



















