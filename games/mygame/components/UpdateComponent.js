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

        this.transform.position.x = Math.max(20, Math.min(window.innerWidth / 1.5, this.transform.position.x))
        this.transform.position.y = Math.max(50, Math.min(window.innerHeight - 20, this.transform.position.y)) //keep player in bounds

        if (this.timeSinceLastLaser > this.fireInterval){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone().minus(new Vector2(0, 50))) //minus will offset laser to front of ship
        }


    }
}