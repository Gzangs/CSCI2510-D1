class LivesDisplayController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).text = "Lives: " + Globals.lives
    }

    updateLives(delta){
        Globals.lives += delta
    }

    playerDied(){
        Globals.lives -= 1
    }
}