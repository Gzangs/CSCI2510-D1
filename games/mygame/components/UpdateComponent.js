class UpdateComponent extends Component {
    timeSinceLastLaser = 0
    fireInterval = (10 / 60) // left number being lower is higher fire rate
    speed = 300

    start(){
        this.timeSinceLastLaser = 0  
    }

    update() {
        this.timeSinceLastLaser += Time.deltaTime

        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowRight")||Input.keysDown.includes("KeyD")) {
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed //movement speed
        }
        if (Input.keysDown.includes("ArrowLeft")||Input.keysDown.includes("KeyA")) {
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        }
        if (Input.keysDown.includes("ArrowUp")||Input.keysDown.includes("KeyW")) {
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        }
        if (Input.keysDown.includes("ArrowDown")||Input.keysDown.includes("KeyS")) {
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        }

        //Camera.main.transform.position = this.transform.position.clone() //follow player
        //Camera.main.transform.position.y -= 25 * Time.deltaTime //move up

        this.transform.position.x = Math.max(20, Math.min(Engine.canvas.width / 1.5, this.transform.position.x)) //keep player in bounds
        //this.transform.position.y = Math.max(50, Math.min(Engine.canvas.height - 20, this.transform.position.y)) 

        let cameraScroll = 35 * Time.deltaTime //35 is scroll speed
        Camera.main.transform.position.y -= cameraScroll
        this.transform.position.y -= cameraScroll //offset camera scroll for player

        let cameraPosition = Camera.main.transform.position
        let topEdge = cameraPosition.y - Engine.canvas.height / 2
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
        this.transform.position.y = Math.max(topEdge + 50, Math.min(bottomEdge - 20, this.transform.position.y)) //keep player in bounds


        if (this.timeSinceLastLaser > this.fireInterval - (Globals.power * 0.01)){ //more power lowers fire rate, 0.01 is too high for full game
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone().minus(new Vector2(0, 50))) //minus will offset laser to front of ship
        }


        //collision check
        let myPosition = this.transform.position
        let bulletGameObjects = GameObject.findGameObjectsWithTag("Bullet")

        for (const bulletGameObject of bulletGameObjects) {
            let bulletPosition = bulletGameObject.transform.position
            let distance = myPosition.minus(bulletPosition).magnitude
            if(distance < 30){
                this.gameObject.destroy()
                let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("playerDied")
                }
            }
        } 
    }
}