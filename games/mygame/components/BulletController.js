class BulletController extends Component{
    bulletTimer = 0

    update(){
        const speed = Time.deltaTime * 200
        this.transform.position.x -= Math.sin(this.transform.rotation) * speed
        this.transform.position.y += Math.cos(this.transform.rotation) * speed
        
        /*this.bulletTimer += 1
        if (this.bulletTimer > 325){
            this.gameObject.destroy() //destroy if out too long
        }*/
        
        let cameraPosition = Camera.main.transform.position
        let leftEdge = cameraPosition.x - Engine.canvas.width / 2
        let rightEdge = cameraPosition.x + Engine.canvas.width / 2
        let topEdge = cameraPosition.y - Engine.canvas.height / 2
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
        if(this.transform.position.x < leftEdge - 10){
            this.gameObject.destroy() //destroy when 10 pixels off the left of the screen
        }
        if(this.transform.position.x > rightEdge + 10){
            this.gameObject.destroy() //destroy when 10 pixels off the right of the screen
        }
        if(this.transform.position.y < topEdge - 10){
            this.gameObject.destroy() //destroy when 10 pixels off the top of the screen
        }
        if(this.transform.position.y > bottomEdge + 10){
            this.gameObject.destroy() //destroy when 10 pixels off the bottom of the screen
        }
    }
}