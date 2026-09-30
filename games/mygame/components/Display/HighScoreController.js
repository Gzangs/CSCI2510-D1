class HighScoreController extends Component{
    update(){
        if (Globals.points > Globals.highscore){
            Globals.highscore = Globals.points
        }
        this.gameObject.getComponent(TextLabel).text = "High Score: " + Globals.highscore + " Points"
    }
}