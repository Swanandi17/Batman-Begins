const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4,thunder1,thunder2,thunder3,thunder4;
var man,manImg;

var rain = [];

function preload(){
    manImg=loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png",
                      "walking_6.png","walking_7.png","walking_8.png");
    thunderImg1 = loadImage("1.png")
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");
}

function setup(){
    createCanvas(500,750);
   
    engine = Engine.create();
    world  = engine.world;
   
    thunder1=createSprite(250,0,0,0);
    thunder2=createSprite(250,0,0,0);
    thunder3=createSprite(250,0,0,0);
    thunder4=createSprite(250,0,0,0);

   man = new Umbrella(50,250,600);
    
}

function draw(){
    background("black");
    Engine.update(engine);

  //  manImg.scale=0.19;
   
  engine = Engine.create();
  world  = engine.world;

 
    if(frameCount % 1 === 0){
        var raindrop = new Drop(random(10,750),10,10);
        rain.push(raindrop);
      }
    
   
      if(frameCount % 100 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1: thunder1.addImage(thunderImg1)
                    break;
            case 2: thunder2.addImage(thunderImg1)
                    break;
            default: break;
          }
        }

        if(frameCount % 150 === 0) {
                var rand = Math.round(random(1,2));
                  switch(rand) {
                    case 1: thunder1.addImage(thunderImg2);
                            break;
                    case 2: thunder2.addImage(thunderImg2);
                            break;
                    default: break;
                  }
                }

                if(frameCount % 200 === 0) {
                        var rand = Math.round(random(1,2));
                          switch(rand) {
                            case 1: thunder1.addImage(thunderImg3);
                                    break;
                            case 2: thunder2.addImage(thunderImg3);
                                    break;
                            default: break;
                          }
                        }

                        if(frameCount % 60 === 0) {
                                var rand = Math.round(random(1,2));
                                  switch(rand) {
                                    case 1: thunder1.addImage(thunderImg4);
                                            break;
                                    case 2: thunder2.addImage(thunderImg4);
                                            break;
                                    default: break;
                                  }
                                }

  /*              if(frameCount % 10 === 0) {
                        var rand = Math.round(random(1,2));
                          switch(rand) {
                            case 1: thunder3.addImage(thunderImg3);
                                    break;
                            case 2: thunder3.addImage(thunderImg3);
                                    break;
                            default: break;
                          }
                        }

                        if(frameCount % 10 === 0) {
                                var rand = Math.round(random(1,2));
                                  switch(rand) {
                                    case 1: thunder4.addImage(thunderImg4);
                                            break;
                                    case 2: thunder4.addImage(thunderImg4);
                                            break;
                                    default: break;
                                  }
                                } */
       man.display();
             
      for(var i = 0; i < rain.length; i++){
        rain[i].fall(20);
        rain[i].display();
      } 
    //  camera.position.x = mouseX;
    //  camera.position.y = mouseY;
           drawSprites();
}   