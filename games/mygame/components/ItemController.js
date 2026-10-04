class ItemController extends Component{

    arcOrigin = new Vector2(0,0)
    arcTime = 0
    arcInitialized = false

    initializeArc(){ //properly start the arc from enemy defeat location
        if(this.arcInitialized){
            return
        }

        this.arcOrigin = this.transform.position.clone()
        this.arcInitialized = true
    }

    update(){
        this.initializeArc()

        const upwardSpeed = 150 //jump up amount
        const gravity = 25 //floatiness

        this.arcTime += Time.deltaTime
        //do stuff with x position here for mario star arc
        this.transform.position.y = (this.arcOrigin.y - (upwardSpeed * this.arcTime)) + (gravity * (this.arcTime ** 2))



        if(this.transform.position.y > window.innerHeight + 100){
            this.gameObject.destroy() //destroy when 100 pixels off the bottom of the screen
        }



        //collision check
        let myPosition = this.transform.position
        let MainGameObject = GameObject.find("Main")

        if(MainGameObject){
            let mainPosition = MainGameObject.transform.position
            let distance = myPosition.minus(mainPosition).magnitude
            if(distance < 30){
                this.gameObject.destroy()
                let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePoints", [50]) //50 points when get item
                }
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePower", [1]) //1 power when get item
                }
            }
        }
    }
}