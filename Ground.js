class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        push();
        stroke("red");
        strokeWeight(4);
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,width,height);
        pop();
    }
}