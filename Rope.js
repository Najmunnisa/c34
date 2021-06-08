class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250,
      };
  
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
    }
  
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }


  /*
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script src="p5.play.js"></script>
  
    <script src="matter.js"></script>
   


    <script src="Ground.js"></script>
    <script src="Box.js"></script>
    <script src="Rope.js"></script>
    <script src="Ball.js"></script>
  </head>
  <body>
    <script src="sketch.js"></script>
  </body>
</html>
*/