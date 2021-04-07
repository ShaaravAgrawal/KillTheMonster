class  Ground{
  constructor(x,y,width,height){
      var options = { restitution: 3,
                      density:1,
                      friction:0.1,
                      isStatic: true  
      }
  this.body = Bodies.rectangle(x,y,width,height,options)
  this.width=  width;
  this.height = height;
  World.add(world,this.body);
  }
  display(){
  rectMode(CENTER)
  rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
} 