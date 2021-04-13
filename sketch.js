
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=260;

function preload()
{
	
}

function setup() {
	createCanvas(630, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1= new Ground(317.5,670,608,15)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  for(var k = 20; k <=width; k = k + 85){
  divisions.push(new Division(k,height-divisionHeight/1.6,10,divisionHeight))
  }
 for (var k = 20; k < divisions.length;k++){
	 divisions[k].display();
 }
 if(frameCount%45===0){
  particles.push(new Particle(random(40,580),10,10))
 }
 for (var a = 0; a < particles.length;a++){
	particles[a].display();
}
for(var j = 40; j <=width; j = j + 60){
	plinkos.push(new Plinko(j,60,10))
	}
	for (var j = 40; j < plinkos.length;j++){
		plinkos[j].display();
	}
	for(var b = 10; b <=width; b = b + 60){
		plinkos.push(new Plinko(b,120,10))
		}
		for (var b = 10; b < plinkos.length;b++){
			plinkos[b].display();
		}
		for(var c = 40; c <=width; c = c + 60){
			plinkos.push(new Plinko(c,180,10))
			}
			for (var c = 40; c < plinkos.length;c++){
				plinkos[c].display();
			}
			for(var l = 10; l <=width; l = l + 60){
				plinkos.push(new Plinko(l,240,10))
				}
				for (var l = 10; l < plinkos.length;l++){
					plinkos[l].display();
				}		
	

  drawSprites();
 
}



