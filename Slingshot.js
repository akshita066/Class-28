class SlingShot
{
    constructor(bodyA,pointB)
    {
        var options= {bodyA:bodyA,pointB:pointB,length:10,stiffness:0.04}
        this.slingshot=Matter.Constraint.create(options)
        this.pointB= pointB;
        World.add(world,this.slingshot)
    }
    display() 
    {
        if(this.slingshot.bodyA)
        {
       var pointA= this.slingshot.bodyA.position;
       strokeWeight(4);
       line (pointA.x,pointA.y,this.pointB.x,this.pointB.y);
        }
    }
    Fly()
    {
        this.slingshot.bodyA=null
    }
}
