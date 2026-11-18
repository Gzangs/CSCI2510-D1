class PowerDisplayGameObject extends RectGameObject {
    constructor(){
        super("PowerDisplayGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"Power: 0"})
        this.addComponent(new PowerDisplayController())
        this.transform.scale = new Vector2(1, 1)
        this.transform.useLetterBoxing = true
    }
}