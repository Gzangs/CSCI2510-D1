class Scene{
    gameObjects = []

    constructor(){
        let cameraGameObject = new GameObject("MainCamera", ["MainCamera"]) //name and tag
        cameraGameObject.addComponent(new Camera())
        this.instantiate(cameraGameObject) //puts it in slot 0
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
        ctx.translate(-Camera.main.transform.position.x, -Camera.main.transform.position.y)

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