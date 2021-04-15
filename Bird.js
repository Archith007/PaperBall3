class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,75,75);
    this.image = loadImage("sprites/paper.png");
    this.smokeImage = loadImage("sprites/smoke.png")

    this.trajectory = []
  }

  display() {
   
  
    super.display();

    if(this.body.velocity.x > 0 && this.body.position.x > 200){
      var pos = [this.body.position.x, this.body.position.y]
      this.trajectory.push(pos)
    }


  }
}
