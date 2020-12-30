const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3;
var box2,box4,box5;
var ground;
var pig1;
var pig2;
var log1,log2,log3,log4;
var bird;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    
    ground= new Ground(240,780,480,20);
    for(var k = 0; k <=width; k = k = 80) {
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 40; j <=width; j=j+50){
        plinkos.push(new Plinko(j,75));
    }
    for (var j = 15; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j,175));
    }
}
function draw(){
    background(0);
    Engine.update(engine);
   for (var k = 0; k < divisions.length; k++){
       divisions[k].display();
   }
   for ( var j = 0; j < plinkos.length; j++){
       plinkos[j].display();
   }
   if(frameCount%60===0){
       particles.push(new Particle(random(0,255), random(0,255),random(0,255)));
   }
   for(var j = 0; j < particles.length; j++){
       particles[j].display();
   }
    ground.display();
    


}