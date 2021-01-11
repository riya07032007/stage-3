class Slingshot{
    constructor(bodyA, pointB){       

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.05,
            length:0.5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

   attach(x){
       this.sling.bodyA=x
   }
        
    

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
    
            strokeWeight(3);
          
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
