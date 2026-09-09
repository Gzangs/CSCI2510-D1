class UpdateComponent extends Component {

    start(){
        this.timeSinceLastLaser = 0
        
    }

    update() {
        this.timeSinceLastLaser += 1

        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowRight")) {
            this.transform.position.x = this.transform.position.x + 5
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

        if (this.timeSinceLastLaser > 2){// this number is fire rate
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }


    }
}