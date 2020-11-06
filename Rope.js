class Rope {
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX = offsetX;
      this.offsetY = offsetY;
        var options = {
          stiffness:0.04,
          length:100,
          bodyA: body1,
          bodyB: body2,
          pointB:{x:this.offsetX,y:this.offsetY}

      } 
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.rope = Constraint.create(options);
      World.add(world,this.rope)
    }
    display (){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(5);
        line(pointA.x+5,pointA.y+5,pointB.x-5,pointB.y-5)
    }
    
}

//chain = new Chain(bird,body, log1.body)