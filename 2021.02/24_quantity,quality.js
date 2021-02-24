let quantities = [];
let qualitySwitch;
let count = 0;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  for (let i = 0; i < quantities.length; i++) {
    let q = quantities[i];
    q.update();
    q.posStop();
    q.merge();
    q.render();

//     if (floor(q.pos.x - 1) == width / 2 && floor(q.pos.y - 1) == height / 2) {
//       qualitySwitch = true;
//     } else {
//       qualitySwitch = false;
//     }
  }
  
  if(count == 11) {
    qualitySwitch = true;
  } else {
    qualitySwitch = false;
  }

  if (qualitySwitch) {
    quality();
  }
  
  textSize(10);
  textAlign(CENTER, CENTER);
  fill(255);
  text('Quantitative expansion leads to qualitative metastasis.', width/2, height/2 + 130);
}

function mousePressed() {
  quantities.push(new quantity(width / 2 + random(-1, 1), height / 2 + random(-1, 1), 5, random(TWO_PI), random(50, 60), random(10, 50)));
  
  count += 1;
}

function quantity(x, y, speed, direction, size, psa) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.vel.set(speed);
  this.vel.rotate(direction);
  this.size = size;
  this.posStopAddress = psa;
  this.alpha = 255;

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.posStop = function() {
    if (this.pos.x > width - (this.posStopAddress + this.size / 2) || this.pos.x < 0 + (this.posStopAddress + this.size / 2)) this.vel.mult(0);
    if (this.pos.y > height - (this.posStopAddress + this.size / 2) || this.pos.y < 0 + (this.posStopAddress + this.size / 2)) this.vel.mult(0);
  }

  this.merge = function() {
    if (quantities.length > 10) {
      //일정개수 객체에 도달했을 때, 각 위치를 체크해서 원점으로 모이게 한다.
      /*
      1.+ +
      2. + -
      3. - +
      4. - -
      
      */
      if (this.pos.x > width / 2) {
        this.vel.set(-2, 0);
        this.pos.add(this.vel);
        if (this.pos.x == width / 2) {
          this.vel.mult(0);
        }
      }

      if (this.pos.x < width / 2) {
        this.vel.set(2, 0);
        this.pos.add(this.vel);
        if (this.pos.x == width / 2) {
          this.vel.mult(0);
        }
      }

      if (this.pos.y > height / 2) {
        this.vel.set(0, -2);
        this.pos.add(this.vel);
        if (this.pos.y == height / 2) {
          this.vel.mult(0);
        }
      }

      if (this.pos.y < height / 2) {
        this.vel.set(0, 2);
        this.pos.add(this.vel);
        if (this.pos.y == height / 2) {
          this.vel.mult(0);
        }
      }
    }
  }

  this.render = function() {
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(10);
    fill(255,this.alpha);
    circle(this.pos.x, this.pos.y, this.size);
    fill(0);
    text('QUANTITY', this.pos.x, this.pos.y);
    this.alpha -= 0.5;
  }
}

function quality() {
  if (qualitySwitch) {
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    circle(width / 2, height / 2, 100);
    fill(0);
    text('QUALITY', width / 2, height / 2);
  }
}
