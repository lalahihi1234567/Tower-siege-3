class Box{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.1
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.image = loadImage("bluething.png");
        World.add(world, this.body);
        this.visibility=255;
      }
      display(){
        if (this.body.speed<7){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility=this.visibility-40;
          tint(255,this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        }
      }
      score(){
        if (this.visibility<0 && this.visibility>-50){
          score=score+1;
        }
      }
}