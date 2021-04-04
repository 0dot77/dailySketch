let img;
let pg;
let tileCount = 5;

let box1;
let Boxes = [];
let numBoxes = 5;

function preload() {
  img = loadImage('ivan-tsaregorodtsev-KUFByOnh1cI-unsplash.jpg');
}

function setup() {
  createCanvas(400, 400);
  img.resize(width, height);

  tileW = width / tileCount;
  tileH = height / tileCount;


  for (let tileX = 0; tileX < tileCount; tileX++) {
    for (let tileY = 0; tileY < tileCount; tileY++) {
      let sx = tileX * tileW;
      let sy = tileY * tileH;
      let sw = tileW;
      let sh = tileH;

      let dx = tileX * tileW;
      let dy = tileY * tileH;
      let dw = tileW;
      let dh = tileH;

      // 5개의 박스를 만들고, 각각의 효과가 다르도록!
      for (let i = 0; i < numBoxes; i++) {
        Boxes[0] = new imageBox(width / 2, height / 2 - 100, sw, sh);
        Boxes[1] = new imageBox(width / 2, height / 2 + 100, sw, sh);
        Boxes[2] = new imageBox(width / 2 - 150, height / 2 - 100, sw, sh);
        Boxes[3] = new imageBox(width / 2 + 100, height / 2 - 80, sw, sh);
        Boxes[4] = new imageBox(width / 2 - 80, height / 2 + 50, sw, sh);
      }
    }
  }
}

function draw() {
  // background(220);

  background(img);


  for (let i = 0; i < Boxes.length; i++) {
    let b = Boxes[i];
    b.display(i);
    b.textBox(i); //지정한 상자가 어디에 있는지 위치 알려주기
  }
  //   for(let tileX = 0; tileX < tileCount; tileX ++) {
  //     for(let tileY = 0; tileY < tileCount; tileY ++) {
  //       let sx = tileX * tileW;
  //       let sy = tileY * tileH;
  //       let sw = tileW;
  //       let sh = tileH;

  //       let dx = tileX * tileW;
  //       let dy = tileY * tileH;
  //       let dw = tileW;
  //       let dh = tileH;


  //  //copy(img,복사하고자 하는 x,y,w,h 좌표, 복사되는 위치의 좌표x,y,w,h);
  //       copy(img,sx,sy,sw,sh,dx,dy,dw,dh);

  //     }
  //   }

  // }
}

function mouseReleased() {
  for (let i = 0; i < Boxes.length; i++) {
    let b = Boxes[i];
    b.clicked = false;
  }
}

function mouseDragged() {
  for (let i = 0; i < Boxes.length; i++) {
    let b = Boxes[i];
    b.update();
  }
}

function mousePressed() {
  let idx = -1; // 클릭된 박스의 인덱스 값을 저장한다.
  for (let i = numBoxes - 1; i >= 0; i--) {
    let b = Boxes[i];
    b.checkClicked(mouseX, mouseY);

    if (b.clicked) {
      idx = i;
      break;
    }
  }

  // if (idx != -1) { // 어떤 박스가 클릭이 되었다면,
  //   let last = Boxes[idx];
  //   for (let i = idx+1; i < numBoxes; i++) {
  //     Boxes[i - 1] = Boxes[i]; // 위의 인덱스 값을 아래로 덮어씌워주기
  //   }
  //   Boxes[numBoxes - 1] = last;
  // }
  //     for(let i = 0; i < Boxes.length; i++) {
  //     let b = Boxes[i];
  //     b.checkClicked(mouseX,mouseY);

  //한 번에 박스가 여러개 겹쳐서 잡히는 현상 해결하기
  // if(b.clicked) {
  //   break; // for loop 밖으로 빠져나오게 되면서 하나만 짚을 수 있게 된다.
  // }
  // }
}

class imageBox {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.clicked = false;
  }

  update() {
    if (this.clicked) {
      let dx = mouseX - pmouseX;
      let dy = mouseY - pmouseY;
      this.x += dx;
      this.y += dy;
    }
  }
  checkClicked(cx, cy) {
    if (cx > this.x && cx < this.x + this.w && cy > this.y && cy < this.y + this.h) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

  display(i) {
    push();
    stroke(0);
    strokeWeight(3);
        noFill();
    rect(this.x, this.y, this.w, this.h);
    let sinWave = map(sin(frameCount / 50), -1, 1, -10, 10);
    let tanWave = map(tan(frameCount / 50), -1, 1, -20, 20);
    switch (i) {
      case 0:
        copy(img, this.x + int(sinWave), this.y, this.w, this.h, this.x, this.y, this.w, this.h);
        break;
      case 1:
        push();
        blendMode(SCREEN);
        copy(img, this.x, this.y, this.w, this.h, this.x, this.y, this.w, this.h);
        fill(random(255), random(255), random(255), 200);
        rect(this.x, this.y, this.w, this.h);
        pop();
        break;

      case 2:
        push();
        copy(img, this.x, this.y + int(tanWave), this.w, this.h, this.x, this.y, this.w, this.h);
        pop();
        break;

      case 3:
        push();
        copy(img, this.y,this.x, this.w, this.h, this.x, this.y, this.w, this.h);
        pop();
        break;
    }
    // copy(img, this.x,this.y,this.w, this.h,this.x,this.y,this.w,this.h);
    pop();
  }

  textBox(i) {
    push();

    textStyle(ITALIC);
    switch(i) {
      case 0:
        textSize(30);
        text('WAVE',this.x,this.y - 3);
        break;
              case 1:
        textSize(23);
        text('GLITCH',this.x,this.y - 3);
        break;
                      case 2:
        textSize(30);
        text('TOP',this.x + 10,this.y - 3);
        break;
                              case 3:
        textSize(13);
        text('WHERE I GO?',this.x,this.y - 3);
        break;
        
                                      case 4:
        textSize(30);
        text('HERE',this.x,this.y - 3);
        break;
    }
    pop();
  }
}
