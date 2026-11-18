class PointsGameObject extends RectGameObject {
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"0 points"})
        this.addComponent(new PointsController())
        this.transform.scale = new Vector2(1, 1)
        this.transform.useLetterBoxing = true
    }
}