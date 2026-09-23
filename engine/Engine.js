class Engine{
    static canvas

    static ctx

    static start(nextScene){
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        SceneManager.nextScene = nextScene

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