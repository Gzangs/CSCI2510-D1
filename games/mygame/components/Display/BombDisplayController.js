class BombDisplayController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).text = "Bombs: " + Globals.bombs
    }
}