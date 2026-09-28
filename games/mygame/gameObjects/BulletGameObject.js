class BulletGameObject extends GameObject{
    constructor(){
        super("Bullet", ["Bullet"])
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.circle})
        this.transform.scale = new Vector2(0.75, 0.75)
        this.addComponent(new BulletController())
    }
}