class KnightBossController extends Component{
    direction = 1
    fireInterval = (80 / 60)
    fireIntervalTwo = (100 / 60)
    fireIntervalThree = (40 / 60)
    chainShotDelay = 0.15
    chainInterval = 0
    bulletsRemaining = 4
    shotMode = -1
    fightStarted = false
    phaseThreeRotation = 0

    start(){
        this.timeSinceLastBullet = 0
        this.timeSinceLastBulletTwo = 0
        this.timeSinceLastBulletThree = 0
    }

    fixedUpdate(){

    }

    update(){
        this.timeSinceLastBullet += Time.deltaTime
        this.timeSinceLastBulletTwo += Time.deltaTime
        this.timeSinceLastBulletThree += Time.deltaTime
        if(this.gameObject.getComponent(Health).health <= 0){
            let itemGameObject = instantiate(new LifeItemGameObject(), this.transform.position.clone())
            let itemLetterGameObject = instantiate(new LifeItemLetterGameObject(), new Vector2(-13, 14))
            itemLetterGameObject.transform.setParent(itemGameObject.transform)

            this.gameObject.destroy()
            let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePoints", [10000]) //10000 points when defeat
                }
            Globals.cameraScroll = true
        }

        

        if(this.shotMode == 0){
            if(this.timeSinceLastBullet > this.fireInterval){
                this.timeSinceLastBullet = 0
                const mainGameObject = GameObject.find("Main")
                const rotations = [Math.PI / 6, 5*Math.PI / 6]
                for (const rotation of rotations){
                    instantiate(new SlashBulletGameObject(), mainGameObject.transform.position.clone(), rotation)
                }
            }
            if(this.timeSinceLastBulletTwo > this.fireIntervalTwo){
                this.timeSinceLastBulletTwo = 0
                instantiate(new StarBulletGameObject(), this.transform.position.clone().minus(new Vector2(0, -20)))
            }
            
        }

        if(this.shotMode == 1){
            if(this.timeSinceLastBullet > this.fireInterval){
                this.timeSinceLastBullet = 0
                const mainGameObject = GameObject.find("Main")
                const rotations = [Math.PI/2, Math.PI/4, 0, (7*Math.PI)/4]
                for (const rotation of rotations){
                    instantiate(new SlashBulletGameObject(), mainGameObject.transform.position.clone(), rotation)
                }
            }

            if(this.timeSinceLastBulletThree > this.fireIntervalThree){
                this.timeSinceLastBulletThree = 0
                let cameraPosition = Camera.main.transform.position
                let leftEdge = cameraPosition.x - Engine.canvas.width / 2
                let rightEdge = Engine.canvas.width / 1.5
                let topEdge = cameraPosition.y - Engine.canvas.height / 2
                let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
                instantiate(new KnifeBulletGameObject(), new Vector2(leftEdge + 20, topEdge + 20))
                instantiate(new KnifeBulletGameObject(), new Vector2(rightEdge - 20, topEdge + 20))
            }
        }

        if(this.shotMode == 2){
            if(this.timeSinceLastBullet > this.fireInterval){
                this.timeSinceLastBullet = 0
                const mainGameObject = GameObject.find("Main")
                instantiate(new SlashBulletGameObject(), mainGameObject.transform.position.clone(), this.phaseThreeRotation)
                this.phaseThreeRotation += Math.PI/6
            }

            if(this.timeSinceLastBulletTwo > this.fireIntervalTwo){
                this.timeSinceLastBulletTwo = 0
                //const rotations = [Math.PI/4, (7*Math.PI)/4]
                const rotations = [Math.PI/2, Math.PI/4, (7*Math.PI)/4, (3*Math.PI)/2, (5*Math.PI)/4, Math.PI, (3*Math.PI)/4]
                for (const rotation of rotations){
                    instantiate(new StarBulletGameObject(), this.transform.position.clone(), rotation)
                }
            }
            
            if(this.timeSinceLastBulletThree > this.fireIntervalThree){
                this.timeSinceLastBulletThree = 0
                let cameraPosition = Camera.main.transform.position
                let leftEdge = cameraPosition.x - Engine.canvas.width / 2
                let rightEdge = Engine.canvas.width / 1.5
                let topEdge = cameraPosition.y - Engine.canvas.height / 2
                let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
                instantiate(new KnifeBulletGameObject(), new Vector2(leftEdge + 20, topEdge + 20))
                instantiate(new KnifeBulletGameObject(), new Vector2(rightEdge - 20, topEdge + 20))
            }
        }

        if(this.gameObject.getComponent(Health).health <= 200){
           this.shotMode = 1 
        }

        if(this.gameObject.getComponent(Health).health <= 150){
            this.shotMode = 2
        }

        let cameraPosition = Camera.main.transform.position
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
        if(this.transform.position.y > bottomEdge + 10){
            this.gameObject.destroy() //destroy when 10 pixels off the bottom of the screen
        }

        if(this.transform.position.y > cameraPosition.y - Engine.canvas.height / 2 + 125 && this.gameObject.getComponent(Health).health > 0){
            Globals.cameraScroll = false
            if(this.fightStarted == false){
                this.shotMode = 0
                this.fightStarted = true
            }
        }

        Globals.bossHealth = this.gameObject.getComponent(Health).health

    }

    bombUsed(){
        let cameraPosition = Camera.main.transform.position
        let leftEdge = cameraPosition.x - Engine.canvas.width / 2
        let rightEdge = cameraPosition.x + Engine.canvas.width / 2
        let topEdge = cameraPosition.y - Engine.canvas.height / 2
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2

        if(this.transform.position.x >= leftEdge && this.transform.position.x <= rightEdge &&
        this.transform.position.y >= topEdge && this.transform.position.y <= bottomEdge){ //if on screen
            this.gameObject.getComponent(Health).health -= 25 //bomb res
        }
    }
}