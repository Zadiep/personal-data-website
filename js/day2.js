

let formula_array;
let bg, clockIn, clockOut, pointer,walker,shadow;

let timeGraphic;
let angle;

let prevX,prevY,newX,newY,xoff,yoff;

let frame;
  
function setup() {
  frameRate(50);
  createCanvas(1200, 1200);
  
  timeGraphic = createGraphics(width,height);

  // background(240);
//   blendMode(DIFFERENCE);



  //color setting
  bg = color("#fc9f4b");
  clockIn = (200);
  // clockOut = color(111,188,255);
  clockOut = color("#9cbdda");
  
  pointer = color("#ffb7fd");
  walker = color("#ffd37b");
  shadow = color(255, 198, 9);
 

  
  prevX = 500;//original points,hidden
  prevY = 500;
  newX = 500;
  newY = 500;
  xoff = 0.0;
  yoff = 0.0;

  hours=7;
  minutes=0;
  frame = ((hours*60)+minutes)*30/2;


  social(0.2);//level
  angle = 50;
  image(timeGraphic,0,0);

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
   push();
   stroke(clockIn);
   noFill();
   strokeWeight(5);
   //drawing the clocks
   let newR = random (100,150);
   circle(prevX,prevY,newR);
   pop();
   push();
   noFill();
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
  drawingContext.shadowColor = color(shadow);

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
  // timeGraphic.background(0);
  timeGraphic.background(176,144,195);

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


