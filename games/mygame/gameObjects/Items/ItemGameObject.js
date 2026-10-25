class ItemGameObject extends GameObject{
    constructor(){
        super("Item", ["Item"], "ships")
        this.addComponent(new ItemController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.square})
        this.transform.scale = new Vector2(0.75, 0.75)
        this.addComponent(new Collider())
    }
}