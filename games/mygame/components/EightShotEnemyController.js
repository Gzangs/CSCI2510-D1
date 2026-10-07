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
            let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePoints", [250]) //250 points when defeat enemy
                }
        }

        if (this.timeSinceLastBullet > this.fireInterval){
            this.timeSinceLastBullet = 0
            const rotations = [Math.PI/2, Math.PI/4, 0, (7*Math.PI)/4, (3*Math.PI)/2, (5*Math.PI)/4, Math.PI, (3*Math.PI)/4] //shoot 8 ways in a circle, radians chart moment
            for (const rotation of rotations){
                instantiate(new BulletGameObject(), this.transform.position.clone(), rotation)
            }
        }

        let cameraPosition = Camera.main.transform.position
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
        if(this.transform.position.y > bottomEdge + 10){
            this.gameObject.destroy() //destroy when 10 pixels off the bottom of the screen
        }
    }

    bombUsed(){
        this.gameObject.getComponent(Health).health -= 100 //make this only on screen
    }
}