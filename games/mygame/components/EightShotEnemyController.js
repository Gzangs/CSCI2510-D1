class EightShotEnemyController extends Component{
    direction = 1
    fireInterval = (120 / 60)

    start(){
        this.timeSinceLastBullet = 0  
    }

    update(){
        this.timeSinceLastBullet += Time.deltaTime

        this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > 800){
            this.direction = -1
        }
        if(this.transform.position.x < 300){
            this.direction = 1
        }

        if(this.gameObject.getComponent(Health).health <= 0){
            instantiate(new ItemGameObject(), this.transform.position.clone())
            this.gameObject.destroy()
            Globals.points += 250 //250 points when defeat enemy
        }

        if (this.timeSinceLastBullet > this.fireInterval){
            this.timeSinceLastBullet = 0
            const rotations = [Math.PI/2, Math.PI/4, 0, (7*Math.PI)/4, (3*Math.PI)/2, (5*Math.PI)/4, Math.PI, (3*Math.PI)/4] //shoot 8 ways in a circle, radians chart moment
            for (const rotation of rotations){
                instantiate(new BulletGameObject(), this.transform.position.clone(), rotation)
            }
        }
    }
}