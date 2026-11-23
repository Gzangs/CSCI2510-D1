class ClosingSceneController extends Component{
    start(){
        this.startingTime = Time.time
    }
    update(){
        if(Time.time >= this.startingTime + 5){
            SceneManager.nextScene = OpeningScene
        }
    }
}
