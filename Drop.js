class Drop{
    constructor(x,y,radius){
        var options = {
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world,this.body);
    }
    

    fall(speed){
        this.y+=speed;
    }
    
    display(){
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.radius);
        pop();
    }
}