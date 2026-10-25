class LifeItemGameObject extends GameObject{
    constructor(){
        super("LifeItem", ["Item"], "ships")
        this.addComponent(new LifeItemController())
        this.addComponent(new Polygon(), {fillStyle:"magenta", points:Assets.square})
        this.transform.scale = new Vector2(0.75, 0.75)
        this.addComponent(new Collider())
    }
}