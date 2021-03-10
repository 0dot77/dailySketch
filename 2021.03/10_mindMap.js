let words1 = '성취없는 삶 이라는 게 가능하긴 한 일인가. 일 없는 삶, 움직이지 않는 삶, 내게는 가능하지 않다.';
let words2 = '어떤 방식으로 내 작업을 볼 수 있게 할 것인지, 어떤 식으로 설득력있게 작업을 할 것인지. 이 부분이 제일 중요하다.';
let words3 = '비판적인 지점도 발생할 수 있고, 이야기가 생산되는 작업이 좋은 작업이라고는 하지만 그 이야기가 나올 수밖에 없이 만들어지는 작업에 대해서는 충분한 고찰이 필요하다고 본다.';
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  stroke(0,30);
  strokeWeight(3);
  for(let i = 0; i < (width/2); i++) {
  line(width/2, height/2, width/2 + i , 0);
}
  for(let i = 0; i < width/2; i++) {
  line(width/2, height/2, width,height/2 + i);
  }
  
  for(let i = 0; i < width/2; i++) {
  line(width/2, height/2, 0,height - i);
}
  
  push();
  translate(width/2, height/2);
  
  rotate(radians(frameCount/10));
  for(let i = 0; i < words1.length; i++) {
    rotate(radians(360/56));
    text(words1.charAt(i),60,0);
  }
  pop();
  
    push();
  translate(width/2, height/2);
  rotate(radians(frameCount));
  for(let i = 0; i < words2.length; i++) {
    rotate(radians(360/66));
    text(words2.charAt(i),80,0);
  }
  pop();
      push();
  translate(width/2, height/2);
  rotate(radians(frameCount/5));
  for(let i = 0; i < words3.length; i++) {
    rotate(radians(360/95));
    text(words3.charAt(i),150,0);
  }
  pop();
}
