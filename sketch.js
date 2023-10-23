let bicepSize = 50;
let yPos = 0;
let jumpSpeed = 2;
let xPos = 0;
let eyeSpeed = 1;


function setup() {
  createCanvas(750, 750);
}

function draw(){
  background(30,100,200)
   
  //Ground
  stroke(0,100,0);
  fill(0,100,0);
  rect(0, 695, 750)
  
  noFill();
  noStroke();
  
  //Head
  fill(224, 171, 139)
  stroke(38,7,1);
  strokeWeight(3);
  ellipse(375, yPos+300, 300, 150);
  

  //Hat
  stroke(360,0,0);
  fill(38,7,1);
  triangle(200,yPos+250,550,yPos+250,370,yPos+180)
  
  stroke(38,7,1);
  strokeWeight(4);
  //Eyes
  noFill();
  ellipse(290, yPos+280, 80,10);
  ellipse(450, yPos+280, 80,10);
  
  //Eyeballs
  fill(380,7,1)
  ellipse(xPos+300, yPos+280, 40,10);
  ellipse(xPos+460, yPos+280, 40,10);
  xPos = xPos - eyeSpeed;
  
  if (xPos <= -20)
    {
      eyeSpeed = -eyeSpeed
    }  
  
  if (xPos > 0)
    {
      eyeSpeed = -eyeSpeed
    }
  
  //Mouth
  noFill();
  line(380,yPos+350,500,yPos+300);
  line(250,yPos+300,370,yPos+350);
  fill(360,0,0);
  triangle(370, yPos+350, 380, yPos+350, 375, yPos+360);
  
  //Nose
  triangle(360, yPos+310, 390, yPos+300, 375, yPos+280)
  
  //Neck
  fill(224, 171, 139)
  rect(355,yPos+375,30,40)
  
  stroke(360,0,0);
  //Glutes
  fill(38,7,1);
  ellipse(320, yPos+580, 80, 80); 
  ellipse(420, yPos+580, 80, 80);
  
  
  stroke(38,7,1);
  //Body
  fill(255,226,198)
  rect(320,yPos+390,100,220,15);
  
  
  //Pecs
  rect(325, yPos+400, 40,45, 10)
  rect(375, yPos+400, 40,45, 10)
  
  
  
  //Abs
  rect(330, yPos+490, 40,25, 10)
  rect(370, yPos+490, 40,25, 10)
  rect(330, yPos+510, 40,25, 10)
  rect(370, yPos+510, 40,25, 10)
  rect(330, yPos+530, 40,25, 10)
  rect(370, yPos+530, 40,25, 10)
  rect(330, yPos+550, 40,25, 10)
  rect(370, yPos+550, 40,25, 10)
  
  
  //Left bicep
  line(320, yPos+430, 100, yPos+430);
  ellipse(210,yPos+430, bicepSize, 30);
  bicepSize = bicepSize + 1;
  if (bicepSize >= 100)
    {
    bicepSize = 50
  }
  
  //Left forearm
  ellipse(130, yPos+324, 50, 50)
  line(100, yPos+430, 120, yPos+350);
  
  //Right bicep
  line(420, yPos+430, 640, yPos+430);
  ellipse(530,yPos+430, bicepSize, 30);
  
  
  
  //Right forearm
  ellipse(610, yPos+324, 50, 50)
   line(640, yPos+430, 620, yPos+350);
  
  //Left Shoulder
  rect(280, yPos+390, 40, 50,8)
  
  //Right Shoulder
  rect(420, yPos+390, 40, 50,8)
  
  
  stroke(360,0,0);
  strokeWeight(5)
  //Left Legs
  fill(38,7,1);
  ellipse(320, yPos+630, 50, 100)
  
  
  //Right Legs
  ellipse(420, yPos+630, 50, 100)
  
  
  //Left Toe
  ellipse(270, yPos+670, 80, 50)
  
  //Right Toe
  ellipse(470, yPos+670, 80, 50)
  
  
  yPos = yPos - jumpSpeed;
  
  if (yPos <= -50)
    {
      //yPos = 10;
      jumpSpeed = -jumpSpeed
    }
  
  if (yPos > 10)
    {
      jumpSpeed = -jumpSpeed
    }
  
 
  
  
  
}