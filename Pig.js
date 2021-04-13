class Pig{

    //properties of the object are listed under constructor
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0.3,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.w = 50;
        this.h = 50;
        World.add(world,this.body);
    }

    //function of the object
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS)
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop();
    }
}

