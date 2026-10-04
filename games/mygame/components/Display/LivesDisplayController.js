class LivesDisplayController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).text = "Lives: " + Globals.lives
    }

    playerDied(){
        Globals.lives -= 1
    }
}