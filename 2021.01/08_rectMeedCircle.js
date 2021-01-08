let points = [],
    numPoints,
    ease,
    target;

function setup() {
  createCanvas(400, 400);
  numPoints = 10;
  ease = 0.3;
  target = {
    x : width,
    y : height/2
  };
  
  for(var i = 0; i < numPoints; i ++) {
    points.push({
      x : 0,
      y : height/2
    })
  }
  
}

function draw() {
  background(200);
  var leader = {
    x : width,
    y : 0
  };
  
  translate(0, height/2);
  for(var i = 0; i < numPoints; i ++) {
    var point = points[i];
    
    point.x += (leader.x - point.x) * ease;
    point.y += (leader.y - point.y) * ease;
    
    noFill();
    stroke(0,0,100);
    ellipse(point.x, point.y, i *10);
    ellipse(point.x, point.y-50, i *10);
    rect(point.x, point.y, i *10);
    rect(point.x, point.y - 50, i *10);
    leader.x = point.x -50;
    leader.y = 0;
  }
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
