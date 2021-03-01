  
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var points = [50,100,150,200,250,300,350,400,450,500];
var values = [];
var gameState = "play";
var divisionHeight=300;
var score =0;
var turn = 0;
var abc;
var def;
//var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
for(var j = 0; j <10; j++){
  values.push(points[Math.round(random(0,9))]);
  console.log(values);
}

   for (var k = 0; k <=800; k = k + 80) {
     divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {
  background("black");
  textSize(20);

  for(var x =25; x< 900; x=x+80){
    fill("white");
    text("" +values[x/80-25/80],x,550);
}
 
/*
  for(var x =265; x< 570; x=x+80){
    text("100",x,550);
  }

  for(var x =585; x< 800; x=x+80){
    text("300",x,550);
  }
*/
fill("white");
 text("Score : "+score,20,30);
  Engine.update(engine);

   
    //score++;
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   fill("white");
   text("Remaining Balls:" +  (turn*-1+5),630,30);

  if(gameState == "r" && particles[turn]){
    if(particles[turn].body.position.x > 0 && particles[turn].body.position.x < 80 && particles[turn].body.position.y >500){
      score = score+ values[0];
      turn++;
      gameState = "play";
  }
}
if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 80 && particles[turn].body.position.x < 160 && particles[turn].body.position.y >500){
    score = score+ values[1];
    turn++;
    gameState = "play";
  }
}

if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 160 && particles[turn].body.position.x < 240 && particles[turn].body.position.y >500){
    score = score+ values[2];
    turn++;
    gameState = "play";
  }
}

  if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 240 && particles[turn].body.position.x < 320 && particles[turn].body.position.y >500){
    score = score+ values[3];
    turn++;
    gameState = "play";
  }
}

  if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 320 && particles[turn].body.position.x < 400 && particles[turn].body.position.y >500){
    score = score+ values[4];
    turn++;
    gameState = "play";
  }
}

  if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 400 && particles[turn].body.position.x < 480 && particles[turn].body.position.y >500){
    score = score+ values[5];
    turn++;
    gameState = "play";
  }
}

  if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 480 && particles[turn].body.position.x < 560 && particles[turn].body.position.y >500){
    score = score+ values[6];
    turn++;
    gameState = "play";
  }
}

  if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 560 && particles[turn].body.position.x < 640 && particles[turn].body.position.y >500){
    score = score+ values[7];
    turn++;
    gameState = "play";
  }
}

  if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 640 && particles[turn].body.position.x < 720 && particles[turn].body.position.y >500){
    score = score+ values[8];
    turn++;
    gameState = "play";
  }
}

  if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 720 && particles[turn].body.position.x < 800 && particles[turn].body.position.y >500){
    score = score+ values[9];
    turn++;
    gameState = "play";
  }
}

if(gameState == "r" && particles[turn]){
  if(particles[turn].body.position.x > 800 || particles[turn].body.position.x < 0){
    turn++;
    gameState = "play";
  }
}
  
  
  ground.display();

  if(turn>4){
    gameState = "end";
  }

  if(gameState == "end"){
    textSize(50);
    text("GAME OVER!!!", 240,450)
  }
}

function mouseReleased(){
  if(gameState =="play"){
 particles.push(new Particle(mouseX, 10,10));
 console.log(particles[turn].body.position.x);

  console.log(turn);

  gameState = "r";
  }
}
