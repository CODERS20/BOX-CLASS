class Box {

    constructor(x,y,width,height){

        var options = {
            restitution: 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }

    display(){
        rectMode(CENTER);
        fill("brown")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }

}