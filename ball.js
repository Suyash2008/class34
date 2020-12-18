class Ball{
    constructor(x,y){
        var option = {
            frictionAir : 0.05,
            density : 1.0
        }
        this.width = 50
        this.height = 50
        this.body = Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER)
        fill("red");
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        ellipse(0,0,this.width,this.height)
        pop();
    }
    
}