let blink=255;



function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0,0,0);
  
  fill(255);
  
  //ground plane
  rect(0,325,500,250);
  
  //Mouth 2
  ellipse(245,240,190,70);
  
  //Right Arm
  ellipse(269,250,20,60);
  
  //Right Hand
  ellipse(274,280,20,10);
  
  //Left Arm
  ellipse(220,250,20,60);
  
  //Left Hand
  ellipse(215,280,20,10);
  
  //Body
  ellipse(245,250,50,130);
  
  //Left Eye Socket
  ellipse(180,115,90,70);
  
  //Left Eye 2
  ellipse(180,115,50,50);
  
  //Left Pupil 2
  ellipse(180,115,20,60);
  
  //Right Eye Socket
  ellipse(300,115,90,70);
  
  //Right Eye 2
  ellipse(300,115,50,50);
  
  //Right Pupil 2
  ellipse(300,115,20,60);
  
  //Rigth Eye Cap
  ellipse(300,115,8,90);
  
  //Left Eye Cap
  ellipse(180,115,8,90);
  
  //Head
  ellipse(245,200,60,60);
  
  //Mouth
  ellipse(245,215,20,15);
  
  //Top Teeth
  ellipse(245,211,16,6);
  
  //Bottom Teeth
  ellipse(245,219,16,5);
  
  //Left Eye
  ellipse(235,199,10,15);
  
  //Left Pupil
  ellipse(235,199,4,6);
  
  //Right Eye
  ellipse(254,199,10,15);
  
  //Right Pupil
  ellipse(254,199,4,6);
  
  //Left Leg
  ellipse(230,310,20,40);
  
  //Right Leg
  ellipse(260,310,20,40);
  
  //Left Foot
  ellipse(225,326,30,10);
  
  //Right Foot
  ellipse(267,326,30,10);
  
  //scratch marks
  ellipse(100,360,15,75);
  ellipse(130,350,15,75);
  ellipse(160,360,15,75);
  
  //Monster Hand
  ellipse(130,288,70,40);
  ellipse (130,300,90,40);
  ellipse(100,330,10,70);
  ellipse(130,325,10,70);
  ellipse(160,330,10,70);
  
  //Cover
  fill(0,0,0,blink);
  rect(0,0,500,500);
  blink=blink-100;
  if(blink <0)
{
  blink=255;
}

  

}