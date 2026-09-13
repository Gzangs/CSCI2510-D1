class LaserController extends Component{
    start(){
        //console.log("laser created")
        this.transform.position.y -= 50 //offset
        this.laserTimer = 0
    }

    update(){
        this.transform.position.y -= 3 //bullet speed
        this.laserTimer += 1
        //console.log("laser updated")
        if (this.laserTimer > 100){
            this.destroy()
            //console.log("laser destroyed")
        }
    }
}