class LivesDisplayGameObject extends GameObject {
    constructor(){
        super("LivesDisplayGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"Lives: 1"})
        this.addComponent(new LivesDisplayController())
        this.transform.scale = new Vector2(3, 3)
    }
}