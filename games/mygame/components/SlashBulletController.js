class SlashBulletController extends Component{
    bulletTimer = 0
    countdownTimer = 1.5

    fixedUpdate(){

    }
    
    update(){
        
        this.bulletTimer = this.bulletTimer + Time.deltaTime
        if (this.bulletTimer > 2){
            this.gameObject.destroy()
        }
        
        this.countdownTimer = this.countdownTimer - Time.deltaTime
        if (this.countdownTimer <= 0){
            this.gameObject.getComponent(Polygon).fillStyle = "rgb(0, 0, 0)"
            this.gameObject.tags.push("Bullet")
        }
    }

    bombUsed(){
        this.gameObject.destroy()
    }
}