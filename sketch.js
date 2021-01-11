const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0

function preload()
{

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
      ground1 = new Ground(430,590,260,20)
      ground2 = new Ground(850,400,200,20)
    //   layer1
      block1 = new Block(330,550,40,60)
      block2 = new Block(370,550,40,60)
      block3 = new Block(410,550,40,60)
      block4 = new Block(450,550,40,60)
      block5 = new Block(490,550,40,60)
      block6 = new Block(530,550,40,60)
    //   layer2
    block7 = new Block(346,490,40,60)
    block8 = new Block(387,490,40,60)
    block9 = new Block(427,490,40,60)
    block10 = new Block(467,490,40,60)
    block11 = new Block(508,490,40,60)

    // layer3
    block12 = new Block(364,430,40,60)
    block13 = new Block(404,430,40,60)
    block14 = new Block(445,430,40,60)
    block15 = new Block(486,430,40,60)

    // layer4
    block16 = new Block(382,370,40,60)
    block17 = new Block(424,370,40,60)
    block18 = new Block(465,370,40,60)

    // layer5
    block19 = new Block(400,310,40,60)
    block20 = new Block(442,310,40,60)

    // layer6
    block21 = new Block(417,250,40,60)

    // layer7(2)
    block22 = new Block(780,360,40,60)
    block23 = new Block(820,360,40,60)
    block24 = new Block(860,360,40,60)
    block25 = new Block(900,360,40,60)

    // layer8(2)
    block26 = new Block(800,300,40,60)
    block27 = new Block(840,300,40,60)
    block28 = new Block(880,300,40,60)

    // layer9(2)
    block29 = new Block(815,240,40,60)
    block30 = new Block(855,240,40,60)

    // layer10(2)
    block31 = new Block(840,180,40,60)

    polygon = new Polygon();

     slingshot = new Slingshot(polygon.body,{x:60,y:400})

	Engine.run(engine);
  
}


function draw() {

  fill("white")
    textSize(25)
    text("SCORE : "+score,750,40)
    


  rectMode(CENTER);
  background(100);

ground1.display()
ground2.display()




block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()

polygon.display()




block7.display()
block8.display()
block9.display()
block10.display()
block11.display()


block12.display()
block13.display()
block14.display()
block15.display()


block16.display()
block17.display()
block18.display()


block19.display()
block20.display()



block21.display()


block22.display()
block23.display()
block24.display()
block25.display()


block26.display()
block27.display()
block28.display()


block29.display()
block30.display()


block31.display()

block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
block7.score()
block8.score()
block9.score()
block10.score()
block11.score()
block12.score()
block13.score()
block14.score()
block15.score()
block16.score()
block17.score()
block18.score()
block19.score()
block20.score()
block21.score()
block22.score()
block23.score()
block24.score()
block25.score()
block26.score()
block27.score()
block28.score()
block29.score()
block30.score()
block31.score()





 slingshot.display()
 

  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body, {x:100, y:200})
		slingshot.attach(polygon.body)
	}
}

