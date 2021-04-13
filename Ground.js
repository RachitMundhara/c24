class Ground{

    //properties of the object are listed under constructor
    constructor(x,y,w,h){
        var ground_option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_option);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    //function of the object
    display(){
        var pos = this.body.position;
        
        push();
       fill("brown");
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
        pop();
    }
}

