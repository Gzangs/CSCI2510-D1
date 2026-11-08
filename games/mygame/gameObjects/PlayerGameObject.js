class PlayerGameObject extends GameObject{
    constructor(){
        super("Main", ["Main"], "ships")
        this.addComponent(new PlayerController())
        this.addComponent(new Polygon(), {fillStyle:"salmon", points:Assets.rectangle})
        this.transform.scale = new Vector2(1, 1)
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    } 
}