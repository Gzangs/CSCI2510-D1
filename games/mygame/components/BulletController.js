class BulletController extends Component{
    bulletTimer = 0
    

    start(){
        this.timeSinceLastBullet = 0  
    }

    update(){
        const speed = Time.deltaTime * 200
        this.transform.position.x -= Math.sin(this.transform.rotation) * speed
        this.transform.position.y += Math.cos(this.transform.rotation) * speed
        
        this.bulletTimer += 1
        if (this.bulletTimer > 500){
            this.gameObject.destroy() //destroy if out too long
        }
        
    }
}