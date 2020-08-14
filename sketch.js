const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





var rain;
var walking,walkingimg
var drops=[]
var maxDrops=100
function preload(){
    //walkingimg=loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png",)
}

function setup(){
  createCanvas(400,700)
  engine = Engine.create();
  world = engine.world;

    //walkingimg=addAnimation()
    umbrella=new Umbrella(200,500)
    if(frameCount%150==0){
      for(var i=0;i<maxDrops;i++){
        drops.push(new Rain(random(0,400),random(0,400)))
      }
    }
}

function draw(){
   background(0,0,0);
    umbrella.display()
//rain.display();
    //drawSprites()
    for(var i=0;i<maxDrops;i++){
      drops[i].display()
      drops[i].update()
    }
}   

