const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var ground,hero;
function preload() {
//preload the images here
bg = loadImage("GamingBackground.png")
}

function setup() {
  var canvas = createCanvas(1850, 1000);
  engine = Engine.create();
  world = engine.world;
  hero = new Hero(300,600,400,200);
  hangingrope = new Fly(hero.body,{x:300,y:400})
  ground = new Ground(600,600,1700,20)
  block1 = new Block(800,500);
  block2 = new Block(800,490)
  block3 = new Block(800,480)
  block4 = new Block(800,470)
  block5 = new Block(800,460)
  block6 = new Block(800,450)

  block7 = new Block(1000,500);
  block8 = new Block(1000,490)
  block9 = new Block(1000,480)
  block10 = new Block(1000,470)
  block11 = new Block(1000,460)
  block12 = new Block(1000,450)

  block13 = new Block(900,500)
  block14 = new Block(900,490)
  block15 = new Block(900,480)
  block16 = new Block(900,470)
  block17 = new Block(900,460)
  block18 = new Block(900,450)

  block19 = new Block(1100,500)
  block20 = new Block(1100,490)
  block21 = new Block(1100,480)
  block22 = new Block(1100,470)
  block23 = new Block(1100,460)
  block24 = new Block(1100,450)
  
  monster = new Monster(1300,400,150,150)
  // create sprites here

}

function draw() {
  background("skyblue");
  Engine.update(engine);
  hangingrope.display()
  fill("white")
  ground.display()
  hero.display()
  fill("red")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()

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

  monster.display()

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  hangingrope.detach()
}