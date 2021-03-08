
var bg, bgimg;
var track,track2,track3, trackimg;
var stone,stone1,stone2,stoneimg;
var cat,catimg;
var cart,cartimg;
var alien,dog,bat;
var alienimg,dogimg,batimg;


function preload(){

  trackimg = loadImage("images/track.png");
  stoneimg = loadImage("images/stones.png")
  bgimg = loadImage("images/img.jpg");

  cartimg = loadImage("images/car.png")
  catimg = loadImage("images/cat.png");

  alienimg = loadImage("images/alien.png");
  dogimg = loadImage("images/dog.png");
  batimg = loadImage("images/bat.png");
  
}

function setup() {
  createCanvas(1400,780);

  bg = createSprite(700,300,10,80);
  bg.addImage('b',bgimg);
  bg.scale = 3
  
   
  stone = createSprite(700,300,50,780);
  stone.addImage('s',stoneimg);
  

  stone1 = createSprite(450,300,50,780);
  stone1.addImage('s',stoneimg);
  

  stone2 = createSprite(950,300,50,780);
  stone2.addImage('s',stoneimg);
  
  
  track = createSprite(700,300,1000,600);
  track.addImage('a',trackimg);
  track.scale = 1;


  track2 = createSprite(450,300,1000,600);
  track2.addImage('a',trackimg);
  track2.scale = 1;
  

  track3 = createSprite(950,300,1000,600);
  track3.addImage('a',trackimg);
  track3.scale = 1;
 

  cart = createSprite(700,500,50,50);
  cart.addImage('z',cartimg);
  cart.scale = 1.2
  

  cat = createSprite(700,530,50,50);
  cat.addImage('y',catimg);
  cat.scale = 0.05;

  dog = createSprite(450,230,50,50);
  dog.addImage('c',dogimg);
  dog.scale = 0.2;

  bat = createSprite(950,230,50,50);
  bat.addImage('e',batimg);
  bat.scale = 0.5;

  alien = createSprite(700,230,50,50);
  alien.addImage('c',alienimg);
  alien.scale = 0.25;


}

function draw() {

  background("white"); 
  

  if(bg.y>700){
    bg.y = 300;
  }

   if(track.y>700){
     track.y = 300;
   }
   if(track2.y>700){
    track2.y = 300;
  }
  if(track3.y>700){
    track3.y = 300;
  }

   if(stone.y>500){
    stone.y = 300;
  }
  if(stone1.y>500){
    stone1.y = 300;
  }
  if(stone2.y>500){
    stone2.y = 300;
  }

  drawSprites();
}
