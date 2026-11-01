class ChainShotEnemyController extends Component{
    direction = 1
    fireInterval = (160 / 60)
    chainShotDelay = 0.3
    chainInterval = 0
    bulletsRemaining = 2

    start(){
        this.timeSinceLastBullet = 0  
    }

    update(){
        this.timeSinceLastBullet += Time.deltaTime

        /*this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > 750){
            this.direction = -1
        }
        if(this.transform.position.x < 500){
            this.direction = 1
        }*/

        if(this.gameObject.getComponent(Health).health <= 0){
            let itemGameObject = instantiate(new ItemGameObject(), this.transform.position.clone())
            let itemLetterGameObject = instantiate(new ItemLetterGameObject(), new Vector2(-13, 14))
            itemLetterGameObject.transform.setParent(itemGameObject.transform)

            this.gameObject.destroy()
            let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePoints", [100]) //100 points when defeat enemy
                }
        }

        if (this.bulletsRemaining > 0){
            this.chainInterval += Time.deltaTime
            if (this.chainInterval >= this.chainShotDelay){
                instantiate(new BulletGameObject(), this.transform.position.clone().minus(new Vector2(0, -20)))
                this.bulletsRemaining--
                this.chainInterval = 0
            }
        } else if (this.timeSinceLastBullet > this.fireInterval){
            instantiate(new BulletGameObject(), this.transform.position.clone().minus(new Vector2(0, -20)))
            this.bulletsRemaining = 2
            this.chainInterval = 0
            this.timeSinceLastBullet = 0
        }

        let cameraPosition = Camera.main.transform.position
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
        if(this.transform.position.y > bottomEdge + 10){
            this.gameObject.destroy() //destroy when 10 pixels off the bottom of the screen
        }
    }

    bombUsed(){
        let cameraPosition = Camera.main.transform.position
        let leftEdge = cameraPosition.x - Engine.canvas.width / 2
        let rightEdge = cameraPosition.x + Engine.canvas.width / 2
        let topEdge = cameraPosition.y - Engine.canvas.height / 2
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2

        if(this.transform.position.x >= leftEdge && this.transform.position.x <= rightEdge &&
        this.transform.position.y >= topEdge && this.transform.position.y <= bottomEdge){ //if on screen
            this.gameObject.getComponent(Health).health -= 100
        }
    }
}