class BossHealthDisplayGameObject extends GameObject {
    constructor(){
        super("BossHealthDisplayGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"Boss Health: 0"})
        this.addComponent(new BossHealthDisplayController())
        this.transform.scale = new Vector2(3, 3)
    }
}