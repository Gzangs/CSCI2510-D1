class SceneTimerController extends Component{
    startTime
    start(){
        this.startTime = Time.time

    }

    update(){
        let sceneTime = Time.time - this.startTime

        sceneTime = Math.floor(sceneTime * 100)/100

        let sceneTimeMinutes = 0
        let sceneTimeSeconds = 0

        sceneTimeMinutes = Math.floor(sceneTime/60)
        sceneTimeSeconds = (sceneTime - sceneTimeMinutes * 60).toFixed(2) //twofixed truncates for you
        //Math.floor(sceneTimeMinutes % 10)*100/100 //mod 60 to get remainder seconds
        
        this.gameObject.getComponent(TextLabel).text = sceneTimeMinutes + ":" + sceneTimeSeconds
    }
}