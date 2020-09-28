class Ball {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':0.8,
        'density':1.0,
        isStatic : false
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
  ellipseMode(RADIUS)
    fill(255);
    strokeWeight(4);
    stroke ("white");
   ellipse(pos.x, pos.y, this.radius, this.radius);

  }
};
