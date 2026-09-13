class Scene{
    gameObjects = []

    instantiate(gameObject, position = new Vector(0,0)){
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
        if (Engine.currentScene === this){ //=== checks if value and data type are the same
            gameObject.start()
        }
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
        this.gameObjects = this.gameObjects.filter(function(gameObject) {
            return !gameObject.isDestroyed
        })

    }

    draw(ctx){
        for(const gameObject of this.gameObjects){
            gameObject.draw(ctx)
        }
    }
}

function instantiate(gameObject, position = new Vector2(0,0)){
        Engine.currentScene.instantiate(gameObject, position)
}