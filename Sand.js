class Sand
{
   constructor(x,y,radius)
   {
     var Options={restitution:0.5,friction:5,density:1.0}
     this.body=Bodies.circle(x,y,radius,Options)
     this.radius=radius
     World.add(world,this.body)
    
   }
   display()
   {
     var pos = this.body.position
     push()
     translate (pos.x,pos.y)
     rotate (this.body.angle)
     stroke("black")
     strokeWeight(3)
     fill("orange")
     circle(0,0,this.radius)
     pop()
   }
}