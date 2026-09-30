class PointsGameObject extends GameObject {
    constructor(){
        super("PointsGameObject", [], "UI") //name, tag, layer
        this.addComponent(new TextLabel(), {text:"0 points", font: "20px Comic Relief"})
        this.addComponent(new PointsController())
    }
}