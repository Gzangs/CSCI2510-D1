class BombDisplayGameObject extends GameObject {
    constructor(){
        super("BombDisplayGameObject")
        this.addComponent(new TextLabel(), {text:"Bombs: 0"})
        this.addComponent(new BombDisplayController())
        this.transform.scale = new Vector2(3, 3)
    }
}