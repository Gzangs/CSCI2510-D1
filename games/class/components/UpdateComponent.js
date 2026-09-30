class UpdateComponent extends Component {

    speed = 100
    start(){
        this.timeSinceLastLaser = 0
    }

    update() {
        this.timeSinceLastLaser += 1

        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowRight")) {
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed //movement speed
        }
        if (Input.keysDown.includes("ArrowLeft")) {
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        }
        if (Input.keysDown.includes("ArrowUp")) {
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        }
        if (Input.keysDown.includes("ArrowDown")) {
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        }


        if (this.timeSinceLastLaser > 5){// lower number is higher fire rate
            this.timeSinceLastLaser = 0
            let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone()) //get the laser just created
            if(Math.random() < 0.5) //50/50 to be green instead of default color
            laserGameObject.getComponent(Polygon).fillStyle = "green"
        }

        Camera.main.transform.position = this.transform.position.clone()
        
    }
}