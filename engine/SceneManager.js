class SceneManager{
    static currentScene //static puts things into heap and not tied to an instance of the class
    static nextScene

    static update(){
        if(SceneManager.nextScene){
            SceneManager.currentScene = new SceneManager.nextScene()
            SceneManager.nextScene = undefined
        }
    }

    static loadScene(nextScene, additive = false){
        if(!additive){
            SceneManager.nextScene = nextScene
        }
        else{
            const tempScene = new nextScene()
            for(const gameObject of tempScene.gameObjects){
                SceneManager.currentScene.gameObjects.push(gameObject)
            }
        }
    }
}