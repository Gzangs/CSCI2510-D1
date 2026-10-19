class LevelController extends Component{
    levelWaitTime = 0

    start(){
        SceneManager.loadScene(GenericLevel, true) //the true means its additive
    }
    update(){
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")
        if(enemyGameObjects.length == 0){
            //if no enemies, wait and change scene to next level
            this.levelWaitTime += Time.deltaTime
            if(this.levelWaitTime > 10 && Globals.lives > 0){
                if(SceneManager.currentScene instanceof Level01){    
                    SceneManager.loadScene(Level02)
                }
                if(SceneManager.currentScene instanceof Level02){    
                    SceneManager.loadScene(WinScreen) //WinScreen
                }
            }
        }
        else{
            this.levelWaitTime = 0
        }

        if(Globals.lives <= 0){
            SceneManager.loadScene(GameOverScreen)
        }
    }
}