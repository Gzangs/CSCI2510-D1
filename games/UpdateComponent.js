class UpdateComponent extends Component {
    position

    start(){
        this.position = new Vector2(50, 50)
    }

    update() {
        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowRight")) {
            this.position.x = this.position.x + 2
        }
        if (Input.keysDown.includes("ArrowLeft")) {
            this.position.x = this.position.x - 2
        }
        if (Input.keysDown.includes("ArrowUp")) {
            this.position.y = this.position.y - 2
        }
        if (Input.keysDown.includes("ArrowDown")) {
            this.position.y = this.position.y + 2
        }
    }
}