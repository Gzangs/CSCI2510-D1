class BombDisplayGameObject extends RectGameObject {
    constructor(){
        super("BombDisplayGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"Bombs: 0"})
        this.addComponent(new BombDisplayController())
        this.transform.scale = new Vector2(1, 1)
        this.transform.useLetterBoxing = true
    }
}