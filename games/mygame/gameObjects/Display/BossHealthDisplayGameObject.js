class BossHealthDisplayGameObject extends RectGameObject {
    constructor(){
        super("BossHealthDisplayGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"Boss Health: 0"})
        this.addComponent(new BossHealthDisplayController())
        this.transform.scale = new Vector2(1, 1)
        this.transform.useLetterBoxing = true
    }
}