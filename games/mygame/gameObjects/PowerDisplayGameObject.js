class PowerDisplayGameObject extends GameObject {
    constructor(){
        super("PowerDisplayGameObject")
        this.addComponent(new TextLabel(), {text:"Power: 0"})
        this.addComponent(new PowerDisplayController())
        this.transform.scale = new Vector2(3, 3)
    }
}