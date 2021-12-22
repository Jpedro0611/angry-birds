const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
 
var estadojogo = 'onSling'

var BG = 'sprites/bg.png'

var score = 0;
function preload() {
   getTime();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(210,10);

    
    slingShot = new Sling(bird.body,{x: 234,y: 50});

    
}

function draw(){

    if (backgroundImg){
        background(backgroundImg);

    }
    textSize (30)
    fill ('white')
    text ('pontos:' + score,10,30);
    

    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
   
    slingShot.display();    
    
   
}

function mouseDragged (){
    if (estadojogo === 'onSling'){
        Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY})
    }
  

}

function mouseReleased () {
    slingShot.fly()
    estadojogo = 'NotOnSling'
}

function keyPressed (){
    if (keyCode === 32){
        slingShot.voltar(bird.body);
        estadojogo = 'onSling'


    }
    

}


async function getTime (){
    var response = await fetch('https://worldtimeapi.org/api/timezone/America/Recife')
    console.log(response);
    var responseJSON = await response.json();
    console.log(responseJSON);
    var dateTime = responseJSON.datetime;
    console.log(dateTime);
    var hora = dateTime.slice(11,13)
    console.log(hora);
    
    if (hora>=06 && hora<=18){
        BG = 'sprites/noite.png'

    }else {
        BG = 'sprites/noite.jpg'


    }
    
    backgroundImg = loadImage(BG);


}