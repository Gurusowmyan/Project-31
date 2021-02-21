class Drops {
    constructor(x, y, radius) {
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius =radius;
        //this.image = loadImage("images/Walking Frame/walking_1.png");
        
        World.add(world, this.body);
      
      }
      display(){
        
        
        
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y-70);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill(255);
        ellipseMode(0,0,this.radius,this.radius)
        pop();
      }
    }