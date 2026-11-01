class BossHealthDisplayController extends Component{

    update(){
        if(Globals.cameraScroll == false){
        this.gameObject.getComponent(TextLabel).text = "Boss HP: " + Globals.bossHealth
        }
        else{
            this.gameObject.getComponent(TextLabel).text = ""
        }
    }
}