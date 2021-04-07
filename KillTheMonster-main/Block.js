class Block {
    constructor(x,y){
    this.body = Bodies.rectangle(x,y,50,50)
    this.width = 50;
    this.height = 50;
    World.add(world,this.body)
    }
    display(){
     rectMode(CENTER)
     rect(this.body.position.x,this.body.position.y,50,50);
    }
}