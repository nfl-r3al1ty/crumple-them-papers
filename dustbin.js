class Dustbin {
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.bottom = Bodies.rectangle(x, y, 100, 10, options);
        this.left = Bodies.rectangle(x-50, y-30, 10, 60, options);
        this.right = Bodies.rectangle(x+50, y-30, 10, 60, options);

        this.image = loadImage("dustbingreen.png");

        World.add(world, this.bottom);
        World.add(world, this.left);
        World.add(world, this.right);
    }
    display(){
      var posB =this.bottom.position;
      var posL =this.left.position;
      var posR =this.right.position;
      imageMode(CENTER);
    image(this.image, posB.x, posB.y - 40, 100, 100);
    }
}