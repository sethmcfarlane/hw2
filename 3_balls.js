function setup() {
    createCanvas(400, 400);
}

var x = 10;
var y = 10;
var changeInX = 3;
var changeInY = 3;

var x1 = 200;
var y1 = 100;
var changeInX1 = -3;
var changeInY1 = 3;

var x2 = 300;
var y2 = 300;
var changeInX2 = -3;
var changeInY2 = -3;

function draw() {
    background(220);

    ellipse(x, y, 40);
  	fill (255,30,100) //yellow

    x = x + changeInX;
  	y = y + changeInY;

    if (x > width - 20) {
        changeInX = random(-6,-1);
    }

    if (x < 20) {
        changeInX = random(6, 1);
    }
 		if (y > height -20) {
        changeInY = random(-6,-1);
    }

    if (y < 20) {
        changeInY = random(6, 1);
    }
  
  	ellipse(x1, y1, 40);
		fill (255,201,200) //light pink
    x1 = x1 + changeInX1;
  	y1 = y1 + changeInY1;

    if (x1 > width - 20) {
        changeInX1 = random(-6,-1);
    }

    if (x1 < 20) {
        changeInX1 = random(6, 1);
    }
 		if (y1 > height - 20) {
        changeInY1 = random(-6,-1);
    }

    if (y1 < 20) {
        changeInY1 = random(6, 1);
    }
  
  	ellipse(x2, y2, 40);
  	fill (255,201,100) //dark pink

    x2 = x2 + changeInX2;
  	y2 = y2 + changeInY2;

    if (x2 > width - 20) {
        changeInX2 = random(-6,-1);
    }

    if (x2 < 20) {
        changeInX2 = random(6, 1);
    }
 		if (y2 > height - 20) {
        changeInY2 = random(-6,-1);
    }

    if (y2 < 20) {
        changeInY2 = random(6, 1);
    }
  
}
