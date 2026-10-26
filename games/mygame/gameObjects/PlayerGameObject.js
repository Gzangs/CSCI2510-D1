class PlayerGameObject extends GameObject{
    constructor(){
        super("Main", ["Main"], "ships")
        this.addComponent(new PlayerController())
        this.addComponent(new Polygon(), {fillStyle:"salmon", points:Assets.rectangle})
        this.addComponent(new Collider())
    } 
}