class LevelController extends Component{
    levelWaitTime = 0

    start(){
        SceneManager.loadScene(GenericLevel, true) //the true means its additive
    }
    update(){
        let enemyGameObject = LaserGameObject.find("Enemy")
        if(!enemyGameObject){
            //if no enemy, wait and change scene to next level
            this.levelWaitTime += Time.deltaTime
            if(this.levelWaitTime > 10){
                SceneManager.loadScene(Level02)
            }
        }
        else{
            this.levelWaitTime = 0
        }
    }
}