class EnemyController extends Component{
    direction = 1
    fireInterval = (120 / 60)

    start(){
        this.timeSinceLastBullet = 0  
    }

    update(){
        this.timeSinceLastBullet += Time.deltaTime

        this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > 700){
            this.direction = -1
        }
        if(this.transform.position.x < 500){
            this.direction = 1
        }

        if(this.gameObject.getComponent(Health).health <= 0){
            instantiate(new ItemGameObject(), this.transform.position.clone()) //make this random chance maybe
            this.gameObject.destroy()
            let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePoints", [100]) //100 points when defeat enemy
                }
        }

        if (this.timeSinceLastBullet > this.fireInterval){
            this.timeSinceLastBullet = 0
            instantiate(new BulletGameObject(), this.transform.position.clone().minus(new Vector2(0, -20))) //minus will offset bullet to front of ship
        }

        let cameraPosition = Camera.main.transform.position
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
        if(this.transform.position.y > bottomEdge + 10){
            this.gameObject.destroy() //destroy when 10 pixels off the bottom of the screen
        }
    }

    bombUsed(){
        this.gameObject.getComponent(Health).health -= 100
    }
}