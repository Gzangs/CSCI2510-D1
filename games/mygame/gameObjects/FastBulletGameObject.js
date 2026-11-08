class FastBulletGameObject extends GameObject{
    constructor(){
        super("FastBullet", ["Bullet"], "lasers")
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.circle})
        this.transform.scale = new Vector2(0.625, 0.625)
        this.addComponent(new BulletSpeed(), {speed: 300})
        this.addComponent(new BulletController())
        this.addComponent(new Collider(), {isTrigger:true})
    }
}