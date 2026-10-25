class SuperItemGameObject extends GameObject{
    constructor(){
        super("SuperItem", ["Item"], "ships")
        this.addComponent(new SuperItemController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.square})
        this.transform.scale = new Vector2(0.75, 0.75)
        this.addComponent(new Collider())
    }
}