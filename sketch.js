const Engine =Matter.Engine ;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload (){
  backgroundImg=loadImage ("snow3.jpg")
}



function setup() {
  var canvas = createCanvas(1200,400); 
  
 


 
  snow = new Snow (100,200,30,20)
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  snow.display ();
}