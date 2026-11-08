class UIPanelController extends Component{
    flashTimer = 0

    update(){
        this.flashTimer -= Time.deltaTime
        if(this.flashTimer > 0){
            this.gameObject.getComponent(Polygon).fillStyle = "rgb(255, 74, 74)"
        }
        else{
            this.gameObject.getComponent(Polygon).fillStyle = "thistle"
        }
    }

    bombUsed(){
        this.flashTimer = 1
    }
}