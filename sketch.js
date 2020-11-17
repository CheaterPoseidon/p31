const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
var eng,world
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
var ground

function setup() {
  createCanvas(480,800);
  eng=Engine.create()
  world=eng.world
  ground=new Ground(240,790,480,20)
  createSprite(400, 200, 50, 50);
}



function draw(){
  background(255,255,255);  
  drawSprites();
ground.display()
for(var j=0;j<particles.length,j++;){
  particles[j].display()
}
for(var k=0;k<divisions.length,k++;){
  divisions[k].display()
}

if (frameCount%60==0){
  particles.push(new Particle(random(width/2*10,width/2+10),10,10));
}

}

for (var k=0;k <=divisions.width,k=k+80;){
  divisions.push(new Division(k,divisionHeight/2,10,divisionHeight))

}

for (j=40;j<=plinkos.width,j=j+50;){
  plinkos.push(new Plinko(j,75,10))
}

for (j=15;j <=width-10,j=j+50;){

}