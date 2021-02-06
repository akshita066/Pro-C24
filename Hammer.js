class Hammer
{
   constructor(x,y,width,height)
   {
     var Options={restitution:0.5,friction:1,density:2}
     this.body=Bodies.rectangle(x,y,width,height,Options)
     this.width=width
     this.height=height
     World.add(world,this.body)
    
   }
   display()
   {
     var pos = this.body.position
     pos.x= mouseX
     pos.y= mouseY
     push()
     translate (pos.x,pos.y)
     rotate (this.body.angle)
     rectMode(CENTER)
     stroke("yellow")
     strokeWeight(3)
     fill("yellow")
     rect(0,0,this.width,this.height)
     pop()
   }
}