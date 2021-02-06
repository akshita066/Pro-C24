class Iron
{
   constructor(x,y,width,height)
   {
     var Options={restitution:0.3,friction:5,density:3}
     this.body=Bodies.rectangle(x,y,width,height,Options)
     this.width=width
     this.height=height
     World.add(world,this.body)
    
   }
   display()
   {
     var pos = this.body.position
     push()
     translate (pos.x,pos.y)
     rotate (this.body.angle)
     stroke("brown")
     rectMode(CENTER)
     strokeWeight(3)
     fill("brown")
     rect(0,0,this.width,this.height)
     pop()
   }
}