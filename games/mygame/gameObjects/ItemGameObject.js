class ItemGameObject extends GameObject{
    constructor(){
        super("Item")
        this.addComponent(new ItemController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.power})
        this.transform.scale = new Vector2(0.75, 0.75)
    }
}