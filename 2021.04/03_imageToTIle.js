let img;
let pg;
let tileCount = 5;

let box1;
let Boxes = [];
let numBoxes = 10;

function preload() {
  img = loadImage('laura-chouette-bnPdoKs9d54-unsplash.jpg');
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
      for (let i = 0; i < numBoxes; i++) {
        Boxes[i] = new imageBox(int(random(width)),int(random(height)),sw,sh);
      }
    }
  }
}

function draw() {
  // background(220);

  background(230,50,0);


  for (let i = 0; i < Boxes.length; i++) {
    let b = Boxes[i];
    b.display1();
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

  if (idx != -1) { // 어떤 박스가 클릭이 되었다면,
    let last = Boxes[idx];
    for (let i = idx+1; i < numBoxes; i++) {
      Boxes[i - 1] = Boxes[i]; // 위의 인덱스 값을 아래로 덮어씌워주기
    }
    Boxes[numBoxes - 1] = last;
  }
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

  display1() {
    let wave = map(tan(frameCount/50),-1,1,-10,10);
    copy(img, this.x + int(wave),this.y,this.w, this.h,this.x, this.y,this.w,this.h);
  }
}
