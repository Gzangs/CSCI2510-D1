class Engine{
    static canvas

    static ctx

    static layers = ["default", "UI"]


    static start(nextScene, settings){
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        Engine.canvas.width = window.innerWidth //custom
        Engine.canvas.height = window.innerHeight //custom

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        SceneManager.nextScene = nextScene

        if(settings){
            Engine.layers = settings.layers
        }

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
            SceneManager.update()

            Engine.update()
            Engine.draw()

            Time.update()

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