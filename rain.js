class Rain{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.01,
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.r = 5
        World.add(world, this.rain)
    }
    display(){
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,this.r, this.r)
    }
  updatey(){
      if(this.rain.position.y>height){
          Matter.Body.setPosition(this.rain,{x: random(0, 400),y: random(0, 400)})
      }
  }  
}