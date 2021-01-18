class Box{
  constructor(x, y, width, height){
    var box_option={
    density:1,
    friction:0.1
    }
    this.body = Bodies.rectangle(x,y,width,height,box_option);
    this.width = width;
    this.height = height;
    this.visibility = 255
    World.add(world, this.body);
  }
  display(){

    if(this.body.velocity.x<1){
    var angle = this.body.angle;
    var red = random(0,255);
    var green = random(0,255);
    var blue = random(0,255);
    fill(red,green,blue);
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        tint(255,this.visibility);
        
        rect(0, 0, this.width, this.height);
        pop();
    }else if(this.visibility===255){
    this.visibility = 0
    World.remove(world,this.body);
    num = num+1;
    }
  }
  
};
