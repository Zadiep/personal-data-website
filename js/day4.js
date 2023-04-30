

let formula_array;
let bg, clockIn, clockOut, pointer,walker;

let timeGraphic;
let angle;

let prevX,prevY,newX,newY,xoff,yoff;

let ver =2;

let level;
  
function setup() {
  frameRate(50);
  createCanvas(1200, 1200);
  background(255);
  timeGraphic = createGraphics(width,height);

  // background(240);
  blendMode(DIFFERENCE);



  //color setting
  bg = color(0);
  clockIn = ("#6B4160");
  clockOut = color(180);
  pointer = color("#318080");
  walker = color(60);
 

  
  prevX = 500;//original points,hidden
  prevY = 500;
  newX = 500;
  newY = 500;
  xoff = 0.0;
  yoff = 0.0;

  
  social(0.6);//level
  angle = 50;
  image(timeGraphic,0,0);

  hours=8;
  minutes=28;
  frame = ((hours*60)+minutes)*30/2;

}

function draw() {

  //framecount-->numbers;xoff,yoff--->frequency

  if (frameCount < frame){
    randomWalker();}

  if (frameCount == 1 || (frameCount % 30 == 0 && frameCount < frame)){
    clock();}

}

function clock(){


   //drawing the clock
   push();
   
   let o = floor(random(0,9));
   stroke(clockIn);
  //  let alpha = random (40,100);
  //  fill(255,255,255,alpha);

   noFill();
   strokeWeight(5);
   //drawing the clocks
   let newR = random (100,150);
   circle(prevX,prevY,newR);
   push();
   strokeWeight(5);
   stroke(clockOut);
   circle(prevX,prevY,newR+10);
   pop();


   push();
   stroke(pointer);
   strokeWeight(5);

   //fenzhen
   push();
   let side = floor(random(0,5));
   if(side == 1){
     line(prevX,prevY,prevX+(newR/2-5),prevY);
   }
   if(side == 2){
     line(prevX,prevY,prevX-(newR/2-5),prevY);
   }
   if(side == 3){
     line(prevX,prevY,prevX,prevY+(newR/2-5));
   }
   if(side == 4){
     line(prevX,prevY,prevX,prevY-(newR/2-5));
   }
   
   //miaozhen
   let t = random(2,5);
   line(prevX,prevY,prevX+(newR/2-5)/t,prevY+(newR/2-5)/t);
   pop();
   pop();
   //
   pop();


}


function randomWalker(){
  push();
  drawingContext.shadowOffsetX = 1;
  drawingContext.shadowOffsetY = -1;
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = color(0);

  xoff += 0.01;
  yoff += 0.03;

  stroke(walker);
  strokeWeight(2);
  line(prevX,prevY,newX,newY);

  //update the values
  prevX = newX;
  prevY = newY;
  newX = noise(xoff)*width;
  newY = noise(yoff)*height;
  pop();
}


function social(level){
  timeGraphic.background(255);


  let w = width;
  let h = height;

  let r_max = ((min(w, h) / 2) * sqrt(2)) / 2;

  let center_x = w / 2;
  let center_y = h / 2;

  timeGraphic.push();
  timeGraphic.scale(2,2);
  timeGraphic.translate(center_x/2,center_y/2);
  for (let k = 0; k < w * h * 0.1; k++) {
    let r = tan(random(TWO_PI)) * r_max * level;
    let angle = random(TWO_PI);
    let point_x = cos(angle) * r;
    let point_y = sin(angle) * r;
  
    timeGraphic.stroke(bg);
    timeGraphic.point(point_x, point_y);
  }

  timeGraphic.pop();
 
  
}

