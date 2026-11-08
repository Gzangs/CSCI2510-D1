class RecoverItemGameObject extends GameObject{
    constructor(){
        super("Item", ["Item"], "ships")
        this.addComponent(new RecoverItemController())
        this.addComponent(new RecoverAmount())
        this.addComponent(new Polygon(), {fillStyle:"gold", points:Assets.square})
        this.transform.scale = new Vector2(0.75, 0.75)
        this.addComponent(new Collider(), {isTrigger:true})
    }
}