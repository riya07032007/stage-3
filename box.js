class Block{
    constructor(x,y,width,height) {
    var options={
       isStatic:false
 
    }
 
    this.body= Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    this.visibility=255
 }
 
 
 display(){


    if(this.body.speed<3){
       var angle=this.body.angle
       var pos=this.body.position
       push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      rect(0,0,this.width,this.height)
      
      pop()
    }else{
      push()
       World.remove(world,this.body)
      this.visibility=this.visibility-2
      tint(255,this.visibility)
      pop()
    }

   }


   score(){
      if(this.visibility<0&&this.visibliity>-105){
    score++
      }
    }


    
}
 