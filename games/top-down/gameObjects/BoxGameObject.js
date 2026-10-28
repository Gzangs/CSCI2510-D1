class BoxGameObject extends GameObject{
    constructor(){
        super("BoxGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'orange', points: Assets.triangle})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
        //this.addComponent(new BoxGameObjectController)
        this.transform.scale = new Vector2(15,15)
    }
}
