class Engine{
    static canvas

    static ctx

    static layers = ["default", "UI"]

    static aspectRatio

    static cameraWidthInWorldSpace

    static letterBoxingWidth = 0
    static letterBoxingHeight = 0

    static collisionLayers = []

    static lastTimeStep


    static start(nextScene, settings){
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)
        addEventListener("mousemove", Input.mousemove)
        //addEventListener("contextMenu", e=>e.preventDefault()) remove context menu from right click

        SceneManager.nextScene = nextScene

        if(settings){
            Engine.layers = settings.layers
            Engine.aspectRatio = settings.aspectRatio
            Engine.cameraWidthInWorldSpace = settings.cameraWidthInWorldSpace
            if(settings.collisionLayers){
                Engine.collisionLayers = settings.collisionLayers
            }
        }

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop(timestamp) {
        if(!Engine.lastTimeStep){
            Engine.lastTimeStep = timestamp
        }
        else{
            const diffInMilliseconds = timestamp - Engine.lastTimeStep
            const diffInSeconds = diffInMilliseconds / 1000
            Time.deltaTime = Math.min(diffInSeconds, 1/60) //mathmin is for debugging time freeze
            Engine.lastTimeStep = timestamp
        }
        SceneManager.update()

        Engine.update()
        Engine.draw()

        Time.update()

        Input.update()

        requestAnimationFrame(Engine.gameLoop)
    }

    static update(){
        //update()
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }

    static draw(){
            //expand size of canvas
            Engine.canvas.width = window.innerWidth
            Engine.canvas.height = window.innerHeight
            //draw(Engine.ctx) //give context
            SceneManager.currentScene.draw(Engine.ctx)
    }
}