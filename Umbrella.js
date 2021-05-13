class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.5
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
     //   var pos = this.body.position;
        image(manImg, 50,550,175,175);

   }
}
