const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12
var backgroundImg
var hexagon, slingshot;
var somevar
var gameState = "onSling";
var score 
var num
var gameEnd = false;
function preload() {
    getTime();
}

function setup(){
    num = 0;
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,415,1200,20);
    
    box1 = new Box(500,200,40,40);
    box2 = new Box(535,200,40,40);
    box3 = new Box(570,200,40,40);
    box4 = new Box(605,200,40,40);
    box5 = new Box(640,200,40,40);
    box6 = new Box(675,200,40,40);
    box7 = new Box(710,200,40,40);
    box8 = new Box(745,200,40,40);
    box9 = new Box(780,200,40,40);
    box10 = new Box(570,150,60,60);
    box11 = new Box(630,150,60,60);
    box12 = new Box(690,150,60,60);
    box13 = new Box(630,70,70,70);
    hexagon = new Hexagon(200,250);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:200, y:250});
    
}

function draw(){
    if(gameEnd===false){
    
    if(somevar){
    background(somevar);
    }
    Engine.update(engine);

    hexagon.display();
    ground.display();
   
    slingshot.display();    
    
    textSize(20);
    fill(255,255,255);
    score = text("SCORE : "+num,20,190);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    }else if(gameEnd===true){
        textSize(30)
        noStroke();
        fill("white");
        text("YOU WON",200,200);
    }
    if(num===13||num>13){
        gameEnd=true;
    }
}

  
  
  
  function mouseDragged(){
    if (gameState!=="launched"){
        Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(hexagon.body);
       gameState= "onSling";
       Body.setPosition(hexagon.body,{x:200,y:250})
       Body.setVelocity(hexagon.body,{x:0,y:0})
    }
}

async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var daytime = responseJSON.datetime;
    var hour = daytime.slice(11,13);
    if(hour>=06&&hour<=18){
        bg = "bg.png";
    }else{
        bg = "bg2.jpg";
    }
    somevar = loadImage(bg);
}
