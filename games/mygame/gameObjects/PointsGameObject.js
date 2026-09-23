class PointsGameObject extends GameObject {
    constructor(){
        super("PointsGameObject")
        this.addComponent(new TextLabel(), {text:"0 points"})
        this.addComponent(new PointsController())
    }
}