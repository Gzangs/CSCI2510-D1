class ShotgunEnemyController extends Component{
    direction = 1
    fireInterval = (120 / 60)

    start(){
        this.timeSinceLastBullet = 0  
    }

    update(){
        this.timeSinceLastBullet += Time.deltaTime

        /*this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > 1200){
            this.direction = -1
        }
        if(this.transform.position.x < 500){
            this.direction = 1
        }*/

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
            const rotations = [0, 11*Math.PI/6, Math.PI/6] //shoot 3 ways downward
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