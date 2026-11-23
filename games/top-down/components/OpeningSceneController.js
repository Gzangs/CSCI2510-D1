class OpeningSceneController extends Component{
    start(){
        
    }
    update(){
        if(Input.keysDown.length != 0){
            SceneManager.nextScene = MainScene
        }
    }
}
