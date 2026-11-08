class BigBulletGameObject extends GameObject{
    constructor(){
        super("BigBullet", ["Bullet"], "lasers")
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.circle32})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new BulletSpeed(), {speed: 200})
        this.addComponent(new BulletController())
        this.addComponent(new Collider(), {isTrigger:true})
    }
}