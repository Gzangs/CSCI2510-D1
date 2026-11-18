class LivesDisplayGameObject extends RectGameObject {
    constructor(){
        super("LivesDisplayGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"Lives: 1"})
        this.addComponent(new LivesDisplayController())
        this.transform.scale = new Vector2(1, 1)
        this.transform.useLetterBoxing = true
    }
}