class BombItemGameObject extends GameObject{
    constructor(){
        super("BombItem", ["Item"], "ships")
        this.addComponent(new BombItemController())
        this.addComponent(new Polygon(), {fillStyle:"limegreen", points:Assets.square})
        this.transform.scale = new Vector2(0.75, 0.75)
        
    }
}