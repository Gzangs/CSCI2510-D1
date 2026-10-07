class BombDisplayController extends Component{

    update(){
        this.gameObject.getComponent(TextLabel).text = "Bombs: " + Globals.bombs
    }

    updateBombs(delta){
        Globals.bombs += delta
    }

    playerDied(){
        Globals.bombs = 3
    }

    bombUsed(){
        if(Globals.bombs > 0){
            Globals.bombs -= 1
        }
    }
}