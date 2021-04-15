
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg = "sprites/bg1.png";
function preload(){
   
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
         
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    log1 = new Log(900, 380, 150, 20)
    log2 = new Log(985, 315, 20, 150)
    log3 = new Log(815, 315, 20, 150)


    bird = new Bird(200,60);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background("white");
   
    Engine.update(engine);
    strokeWeight(4);

    ground.display()
    log1.display()
    log2.display()
    log3.display()

    bird.display();

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(bird.body);
    }
}

