class Box{

    //properties of the object are listed under constructor
    constructor(x,y,w,h){
        var box_option = {
            restitution:0.8,
            friction:1,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,w,h,box_option);
        this.w = w;
        this.h = h;
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
        strokeWeight(4);
        stroke("green");
        fill("white")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop();
    }
}

