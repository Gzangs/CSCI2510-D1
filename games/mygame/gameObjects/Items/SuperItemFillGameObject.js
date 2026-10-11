class SuperItemFillGameObject extends GameObject{
    constructor(){
        super("SuperItemFill", ["Item"], "ships")
        this.addComponent(new Polygon(), {fillStyle:"white", points:Assets.square})
        this.transform.scale = new Vector2(0.95, 0.95)
    }
}