class Scene{
    gameObjects = []

    constructor(backgroundColor){
        let cameraGameObject = new GameObject("MainCamera", ["MainCamera"]) //name and tag
        cameraGameObject.addComponent(new Camera())
        this.instantiate(cameraGameObject) //puts it in slot 0
        if(backgroundColor){
            cameraGameObject.getComponent(Camera).backgroundColor = backgroundColor
        }
    }

    instantiate(gameObject, position = new Vector2(0,0), rotation = 0){
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
        gameObject.transform.rotation = rotation
        return gameObject;
    }

    start(){
        for(const gameObject of this.gameObjects){ //use of instead of in
            gameObject.start()
        }
    }

    update(){
        //collision
        const collidable = GameObject.findGameObjectsByType(Collider)

        if(Input.mousePosition){
            let matrix = new DOMMatrix()
            matrix.translateSelf(Engine.canvas.width/2, Engine.canvas.height/2)
            matrix.multiplySelf(Camera.main.transform.getWorldMatrix().inverse())

            let worldPositionDOMPoint = matrix.inverse().transformPoint(Input.mousePosition)
            let worldPosition = new Vector2(worldPositionDOMPoint.x, worldPositionDOMPoint.y)
            // console.log(worldPosition)
            for(const gameObject of collidable){
                if(Collisions.isCollisionPointPolygon(worldPosition, gameObject)){
                    gameObject.broadcastMessage("onMouseOver", [])
                }
            }

        }

        //jagged for loop to not check against itself or something already checked
        for(let i = 0; i < collidable.length; i++){
            for(let j = i + 1; j < collidable.length; j++){
                if(Collisions.isCollisionPolygonPolygon(collidable[i], collidable[j])){
                    collidable[i].broadcastMessage("onCollisionStay", [collidable[j]])
                    collidable[j].broadcastMessage("onCollisionStay", [collidable[i]])
                }
            }
        }


        for(const gameObject of this.gameObjects){
            gameObject.update()
        }
        let temp = []
        for(const gameObject of this.gameObjects){
            if(!gameObject.markForDestroy){
                temp.push(gameObject)
            }
        }
        this.gameObjects = temp

    }

    draw(ctx){

        ctx.fillStyle = Camera.main.backgroundColor
        ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height)

        ctx.save() //start camera code
        ctx.translate(Engine.canvas.width / 2, Engine.canvas.height / 2) //makes 0, 0 in the middle of the screen
        //ctx.translate(-Camera.main.transform.position.x, -Camera.main.transform.position.y) //only translate
        ctx.setTransform(ctx.getTransform().multiply(Camera.main.transform.getWorldMatrix().inverse()))

        for(const layer of Engine.layers.filter(l=>l!="UI")){
            for(const gameObject of this.gameObjects.filter(go=>go.layer == layer)){
                gameObject.draw(ctx)
            }
        }
        
        ctx.restore() //end camera code

        //UI layer
        for(const gameObject of this.gameObjects.filter(go=>go.layer == "UI")){
            gameObject.draw(ctx)
        }

    }
}

function instantiate(gameObject, position = new Vector2(0,0), rotation = 0){
        return SceneManager.currentScene.instantiate(gameObject, position, rotation)
}