class BaseClass {
  constructer(x,y,width,height,angle){
  var optons={
    'restitution':1,
    'friction':0.8,
    'density':0.8
  }
  this.body=World.body(x,y,width,height,agle)
  this.width=width
  this.height=height
  this.image=loadImage("sprites/base.png");
  World.add(world,this.body);
}
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
