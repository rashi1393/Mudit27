class Bob{
    constructor(x,y,radius){
        var options = {
            restitution: 1,
            density : 1.2,
            friction : 0.5,
            //isStatic : true,
           
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        //this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("PINK");
        ellipse(0,0,this.radius,this.radius);        
        pop();
    }
}
