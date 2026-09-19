class LaserController extends Component{
    laserTimer = 0

    update(){
        this.transform.position.y -= Time.deltaTime * 200 //bullet speed

        this.laserTimer += 1
        //console.log("laser updated")
        if (this.laserTimer > 100){
            this.gameObject.destroy() //destroy if out too long
            //console.log("laser destroyed")
        }
        
        if(this.transform.position.y < 50){
            this.gameObject.destroy() //destroy if reach top
        }


        //collision check
        let myPosition = this.transform.position
        let enemyGameObject = GameObject.find("Enemy")

        if(enemyGameObject){
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 12){
                this.gameObject.destroy()
                enemyGameObject.destroy()
            }
        }
    }
}