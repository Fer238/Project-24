class Bin{
  constructor(x,y){
    var options={
      isStatic:true
    }
    this.body=Bodies.rectangle(x,y,100,100,options)
    this.img=loadImage("bin.png");
    World.add(world,this.body);
  }
  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			rotate(angle)
			image(this.img,0,0,100,100)
			pop()
  }
}