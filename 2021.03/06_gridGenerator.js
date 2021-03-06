let actRandomSeed;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  noLoop();
  background(random(255));
  randomSeed(actRandomSeed);
  let tileCount = 10;
  let tileW = width / tileCount;
  let tileH = height / tileCount;
  
  // translate(tileW/2, tileH/2);
  for(let gridX = 0; gridX < tileCount; gridX++) {
    for(let gridY = 0; gridY < tileCount; gridY++) {
      let px = gridX * tileW;
      let py = gridY * tileH;
      
//       push();
//       rect(px,py,tileW,tileH);
//       pop();
      
      let toggle = int(random(0,4));
      
      if(toggle == 0) {
        push();
        translate(tileW/2, tileH/2);
        noStroke();
        for(let i = 0; i < 3; i++) {
          if(i == 0) {
            fill(255,0,0);
            ellipse(px - 10,py - 10,8,8);
          } else if(i == 1) {
            fill(0,255,0);
            ellipse(px, py, 5, 5);
          } else if(i == 2) {
            fill(0,0,255);
            ellipse(px + 10, py + 10, 3, 3);
          }
        }
        pop();
      }
      if(toggle == 1) {
        push();
        strokeWeight(3);
        line(px,py,px + tileW, py + tileH);
        pop();
      }
      
      if(toggle == 2) {
        push();
        noStroke();
        fill(random(255));
        triangle(px,py + tileH, px + tileW/2, py, px + tileW, py + tileH);
        pop();
      }
      
    //루프를 돌려서 이미지를 만든 것을 타일 안에 넣어서 복사해주고 싶을 때는, translate를 사용하기 보다는, 직접적으로 루프 안에서 llipse(px + x + tileW/2,py + y + tileH/2,5,5); 와 같은 방식을 사용하면 된다!!
      if(toggle == 3) {
                  push();
        for(let i = 0; i < TAU; i++) {
          let r = 5;
          let x = r * cos(i);
          let y = r * sin(i);
          noStroke();
          fill(random(255),random(255),random(255));
        ellipse(px + x + tileW/2,py + y + tileH/2,10,10);
        }
        pop();
      }
    }
  }
}

function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}

function keyPressed() {
  saveCanvas();
}
