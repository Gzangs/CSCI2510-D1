class UpdateComponent extends Component {
    timeSinceLastLaser = 0
    start(){
        this.timeSinceLastLaser = 0
        
    }

    update() {
        this.timeSinceLastLaser += 1

        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowRight")||Input.keysDown.includes("KeyD")) {
            this.transform.position.x = this.transform.position.x + 7 //movement speed
        }
        if (Input.keysDown.includes("ArrowLeft")||Input.keysDown.includes("KeyA")) {
            this.transform.position.x = this.transform.position.x - 7
        }
        if (Input.keysDown.includes("ArrowUp")||Input.keysDown.includes("KeyW")) {
            this.transform.position.y = this.transform.position.y - 7
        }
        if (Input.keysDown.includes("ArrowDown")||Input.keysDown.includes("KeyS")) {
            this.transform.position.y = this.transform.position.y + 7
        }

        this.transform.position.x = Math.max(20, Math.min(window.innerWidth - 20, this.transform.position.x))
        this.transform.position.y = Math.max(50, Math.min(window.innerHeight - 20, this.transform.position.y)) //keep player in bounds

        if (this.timeSinceLastLaser > 5){// lower number is higher fire rate
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone().minus(new Vector2(0, 50))) //minus will offset laser
        }


    }
}