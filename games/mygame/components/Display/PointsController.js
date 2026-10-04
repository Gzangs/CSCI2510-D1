class PointsController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).text = Globals.points + " Points"
    }

    updatePoints(delta){
        Globals.points += delta
    }
}