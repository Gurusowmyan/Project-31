var thunder1,thunder2,thunder;
var umbrella;
var drops;
var maxDrops =100;
function preload(){
    thunder1=loadImage("images/1.png");
    thunder2=loadImage("images/2.png");
}

function setup(){
    createCanvas(400,1200); 
    if(frameCount%80 === 0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
      }
    }
}

function draw(){
   
    background(0);
    Thunder();
    if(this.rain.position.y > height) {
        Matter.Body.position(this.rain,{x:random(0,400),y:random(0,400)});
                }
                if(this.rain.position.y>height){
                    Matter.Body.setPosition(this.rain,{x:random(0,400),x:random(0,400)})
                }
for(var i =0;i<maxDrops;i++){
drops[i].showdrops();
drops[i].updateY();
}
}   
function Thunder() {
rand = Math.round(random(1,4));
if(frameCount%80 === 0) {
thunderCreatedFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10);
switch(rand) {
    case 1:thunder.addImage(thunder1);
    break;
    case 2:thunder.addImage(thunder2);
    break;
    default:break;
}
thunder.scale =random(0.3,0.6);
}
}
