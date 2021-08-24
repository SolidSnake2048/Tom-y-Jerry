var Tom,TomImage,TomHit,TomStill;
var Jerry,JerryImage,JerryHit,JerryStill;
var BackImage;
function preload() {
   TomImage=loadAnimation("images/tomTwo.png","images/tomThree.png");
   JerryImage=loadAnimation("images/jerryThree.png","images/jerryTwo.png");
   TomHit=loadImage("images/tomFour.png");
   JerryHit=loadImage("images/jerryOne.png");
   TomStill=loadImage("images/tomOne.png");
   JerryStill=loadImage("images/jerryFour.png");
   BackImage=loadImage("images/garden.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    Tom=createSprite(800,700,20,20);
    Tom.scale=0.2;
    Tom.addAnimation("gatoSentado",TomStill);
    Jerry=createSprite(200,700,20,20);
    Jerry.scale=0.2;
    Jerry.addAnimation("ratonSentado",JerryStill);
}

function draw() {

    background(BackImage);
    
    if(Tom.x - Jerry.x < (Tom.width-Jerry.width)/2){
        Tom.velocityX=0;
        Tom.addAnimation("gatoFeliz",TomHit);
        Tom.changeAnimation("gatoFeliz");
        Jerry.addAnimation("ratonFeliz",JerryHit);
        Jerry.changeAnimation("ratonFeliz");
    }
   

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        Jerry.addAnimation("ratonMovido",JerryImage);
        Jerry.changeAnimation("ratonMovido");

        Tom.addAnimation("gatoMovido",TomImage);
        Tom.changeAnimation("gatoMovido");
        Tom.velocityX=-5;
    }
  
}
