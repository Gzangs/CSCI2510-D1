class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true) //the true means its additive
    }
    update(){
        let enemyGameObject = LaserGameObject.find("Enemy")
        if(!enemyGameObject){
            //if no enemy change scene to next level
            SceneManager.loadScene(Level02)
        }
    }
}