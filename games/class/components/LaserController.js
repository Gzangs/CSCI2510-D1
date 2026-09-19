class LaserController extends Component{
    laserTimer = 0

    update(){
        this.transform.position.y -= Time.deltaTime * 200 //bullet speed
        
        if(this.transform.position.y < 50){
            this.gameObject.destroy()
        }

        //collision check
        let myPosition = this.transform.position
        let enemyGameObject = GameObject.find("Enemy")

        if(enemyGameObject){
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 20){
                this.gameObject.destroy()
                enemyGameObject.destroy()
            }
        }
    }
}