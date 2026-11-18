class HighScoreController extends Component{
    update(){
        if (Globals.points > Globals.highscore){
            Globals.highscore = Globals.points
        }
        this.gameObject.getComponent(TextLabel).text = "HiScore: " + Globals.highscore + " Points"
    }
}