class Chain{
    constructor(bodyA,pointB)
    {
        var option = {
            bodyA:bodyA,pointB:pointB,
            stiffness : 1.2,
            length : 250
        }
        this.chain = Matter.Constraint.create(option)
        this.pointB = pointB
        World.add(world,this.chain);
    }
    display(){
        var pa = this.chain.bodyA.position
        var pb =  this.pointB
        push();
        strokeWeight(5)
        stroke("brown");
        line(pa.x,pa.y,pb.x,pb.y)
        pop();
    }
}