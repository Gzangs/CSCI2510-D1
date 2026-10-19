class HomingShotEnemyController extends Component{
    direction = 1
    fireInterval = (120 / 60)

    start(){
        this.timeSinceLastBullet = 0  
    }

    update(){
        this.timeSinceLastBullet += Time.deltaTime

        this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > 1000){
            this.direction = -1
        }
        if(this.transform.position.x < 500){
            this.direction = 1
        }

        if(this.gameObject.getComponent(Health).health <= 0){
            let itemGameObject = instantiate(new SuperItemGameObject(), this.transform.position.clone())
            let itemFillGameObject = instantiate(new SuperItemFillGameObject())
            let itemLetterGameObject = instantiate(new SuperItemLetterGameObject(), new Vector2(-13, 14))
            itemFillGameObject.transform.setParent(itemGameObject.transform)
            itemLetterGameObject.transform.setParent(itemGameObject.transform)

            this.gameObject.destroy()
            let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePoints", [100]) //100 points when defeat enemy
                }
        }

        if (this.timeSinceLastBullet > this.fireInterval){
            this.timeSinceLastBullet = 0
            const mainGameObject = GameObject.find("Main")
            const rotations = [(Math.atan2(this.transform.position.x - mainGameObject.transform.position.x,
                mainGameObject.transform.position.y - 100 - this.transform.position.y))] //aim at player, -100 offsets camera movement
            for (const rotation of rotations){
                instantiate(new FastBulletGameObject(), this.transform.position.clone(), rotation)
            }
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