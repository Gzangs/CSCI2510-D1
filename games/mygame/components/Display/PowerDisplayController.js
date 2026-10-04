class PowerDisplayController extends Component{
    update(){
        if (Globals.power > 100){
            Globals.power = 100
        }
        this.gameObject.getComponent(TextLabel).text = "Power: " + Globals.power + " / 100"
    }

    updatePower(delta){
        Globals.power += delta
    }

    playerDied(){
        Globals.power = Math.floor(Globals.power / 2) //floor rounds down to int
    }
}