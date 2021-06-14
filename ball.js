class Ball{
    constructor(x,y,w,h){
    var options={
 density:1,
frictionAir:0.005,    
isStatic:false
}
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.width=w;
    this.height=h;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("blue");
        fill("pink");
        ellipse(0,0,this.width,this.height);
        pop();
    }
    
    }