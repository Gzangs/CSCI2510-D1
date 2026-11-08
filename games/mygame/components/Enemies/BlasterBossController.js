class BlasterBossController extends Component{
    direction = 1
    fireInterval = (160 / 60)
    chainShotDelay = 0.3
    chainInterval = 0
    bulletsRemaining = 4
    shotMode = 0

    start(){
        this.timeSinceLastBullet = 0  
    }

    update(){
        this.timeSinceLastBullet += Time.deltaTime

        this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > (Engine.canvas.width / 1.5 - 150)){
            this.direction = -1
        }
        if(this.transform.position.x < 150){
            this.direction = 1
        }

        if(this.gameObject.getComponent(Health).health <= 0){
            let itemGameObject = instantiate(new LifeItemGameObject(), this.transform.position.clone())
            let itemLetterGameObject = instantiate(new LifeItemLetterGameObject(), new Vector2(-13, 14))
            itemLetterGameObject.transform.setParent(itemGameObject.transform)

            this.gameObject.destroy()
            let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects){
                    gameObject.broadcastMessage("updatePoints", [1000]) //1000 points when defeat
                }
            Globals.cameraScroll = true
        }

        if(this.shotMode == 0){
            if (this.bulletsRemaining > 0){
            this.chainInterval += Time.deltaTime
            if (this.chainInterval >= this.chainShotDelay){
                const mainGameObject = GameObject.find("Main")
                const baseRotation = Math.atan2(this.transform.position.x - mainGameObject.transform.position.x,
                    mainGameObject.transform.position.y - 100 - this.transform.position.y)
                const rotations = [baseRotation, baseRotation - Math.PI / 6, baseRotation + Math.PI / 6]
                for (const rotation of rotations){
                    instantiate(new BulletGameObject(), this.transform.position.clone(), rotation)
                }
                this.bulletsRemaining--
                this.chainInterval = 0
                if(this.bulletsRemaining == 0){
                    this.shotMode = 1
                }
            }
        } else if (this.timeSinceLastBullet > this.fireInterval){
            this.bulletsRemaining = 4
            this.chainInterval = 0
            this.timeSinceLastBullet = 0
            }
        }

        if(this.shotMode == 1){
            if (this.bulletsRemaining > 0){
            this.chainInterval += Time.deltaTime
            if (this.chainInterval >= this.chainShotDelay){
                const mainGameObject = GameObject.find("Main")
                const baseRotation = Math.atan2(this.transform.position.x - mainGameObject.transform.position.x,
                    mainGameObject.transform.position.y - 100 - this.transform.position.y)
                const rotations = [baseRotation - Math.PI / 20, baseRotation - Math.PI / 6, baseRotation + Math.PI / 20, baseRotation + Math.PI / 6]
                for (const rotation of rotations){
                    instantiate(new BulletGameObject(), this.transform.position.clone(), rotation)
                }
                this.bulletsRemaining--
                this.chainInterval = 0
                if(this.bulletsRemaining == 0){
                    this.shotMode = 0
                }
            }
        } else if (this.timeSinceLastBullet > this.fireInterval){
            this.bulletsRemaining = 4
            this.chainInterval = 0
            this.timeSinceLastBullet = 0
            }
        }

        let cameraPosition = Camera.main.transform.position
        let bottomEdge = cameraPosition.y + Engine.canvas.height / 2
        if(this.transform.position.y > bottomEdge + 10){
            this.gameObject.destroy() //destroy when 10 pixels off the bottom of the screen
        }

        if(this.transform.position.y > cameraPosition.y - Engine.canvas.height / 2 + 125 && this.gameObject.getComponent(Health).health > 0){
            Globals.cameraScroll = false
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