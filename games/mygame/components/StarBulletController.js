class StarBulletController extends Component{
    bulletTimer = 0
    explodeTimer = 1.5

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
        if(this.transform.position.x < leftEdge - 50){
            this.gameObject.destroy() //destroy when 50 pixels off the left of the screen
        }
        if(this.transform.position.x > rightEdge + 50){
            this.gameObject.destroy() //destroy when 50 pixels off the right of the screen
        }
        if(this.transform.position.y < topEdge - 50){
            this.gameObject.destroy() //destroy when 50 pixels off the top of the screen
        }
        if(this.transform.position.y > bottomEdge + 50){
            this.gameObject.destroy() //destroy when 50 pixels off the bottom of the screen
        }

        this.explodeTimer -= Time.deltaTime

        if(this.explodeTimer <= 0){
            const rotations = [Math.PI/6, 11*Math.PI/6, Math.PI/2, 3*Math.PI/2, Math.PI] //shoot 5 ways
            for (const rotation of rotations){
                instantiate(new BulletGameObject(), this.transform.position.clone(), rotation)
            }
            this.gameObject.destroy()
        }
    }

    bombUsed(){
        this.gameObject.destroy()
    }
}