class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly () {
        this.Sling.bodyA = null

    }
    voltar(body){
        this.Sling.bodyA = body

    }
    display(){
        
        image(this.sling1,240,20)
        image(this.sling2,212,20)
        if (this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        push()
        
        stroke(48,22,8)
        if (pointA.x < 200){
            strokeWeight(3);
            line(pointA.x - 10, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x +30, pointB.y - 3);
            image(this.sling3,pointA.x -20, pointA.y - 10, 11.4, 30 )

        } else{
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x +30, pointB.y - 3);
            image(this.sling3,pointA.x -20, pointA.y - 10, 11.4, 30 )



        }
        
        pop()

        }
    }
    
}