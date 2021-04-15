class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
    }

    fly(){
        this.sling.bodyA = null;

    }
    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("Black")
            if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            
            
            }
            else{
                strokeWeight(3);
            
            line(pointA.x, pointA.y, pointB.x, pointB.y)
           
            
            }
        }




        
    }
    
}