const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;
var bg;
var score=0;
function preload(){
    gbgimg();
}
function setup(){
    createCanvas(1200,700);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(600,670,1200,40);

    polygon=new Polygon(200,200);
    slingshot=new Slingshot(polygon.body,{x:200, y:200});

    box1=new Box(730,600);
    box2=new Box(760,600);
    box3=new Box(790,600);
    box4=new Box(820,600);
    box5=new Box(850,600);
    box6=new Box(880,600);
    box7=new Box(910,600);

    box8=new Box(760,550);
    box9=new Box(790,550);
    box10=new Box(820,550);
    box11=new Box(850,550);
    box12=new Box(880,550);

    box13=new Box(790,500);
    box14=new Box(820,500);
    box15=new Box(850,500);
    
    box16=new Box(820,450);
}
function draw(){
    if(bg)
    background(bg);
    fill("white");
    textSize(30);
    text("Score: "+score,1000,50);
    Engine.update(engine);
    ground.display();
    fill("pink");
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
    box14.display();
    box15.display();
    box16.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();

    polygon.display();
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
async function gbgimg(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour);
    if (hour>=06 && hour<19){
        bg=loadImage("bg.png");
    }
    else{
        bg=loadImage("bg2.jpg");
    }
}