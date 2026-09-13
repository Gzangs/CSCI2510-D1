class UpdateComponent extends Component {

    start(){
        this.timeSinceLastLaser = 0
        
    }

    update() {
        this.timeSinceLastLaser += 1

        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowRight")) {
            this.transform.position.x = this.transform.position.x + 5 //movement speed
        }
        if (Input.keysDown.includes("ArrowLeft")) {
            this.transform.position.x = this.transform.position.x - 5
        }
        if (Input.keysDown.includes("ArrowUp")) {
            this.transform.position.y = this.transform.position.y - 5
        }
        if (Input.keysDown.includes("ArrowDown")) {
            this.transform.position.y = this.transform.position.y + 5
        }

        this.transform.position.x = Math.max(20, Math.min(window.innerWidth - 20, this.transform.position.x))
        this.transform.position.y = Math.max(50, Math.min(window.innerHeight - 20, this.transform.position.y)) //keep player in bounds

        if (this.timeSinceLastLaser > 5){// this number is fire rate
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }


    }
}