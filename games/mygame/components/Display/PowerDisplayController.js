class PowerDisplayController extends Component{
    update(){
        if (Globals.power > 100){
            Globals.power = 100
        }
        this.gameObject.getComponent(TextLabel).text = "Power: " + Globals.power + " / 100"
    }
}