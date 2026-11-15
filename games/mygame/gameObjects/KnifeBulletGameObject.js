class KnifeBulletGameObject extends GameObject{
    constructor(){
        super("KnifeBullet", ["Bullet"], "lasers")
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.rectangle})
        this.transform.scale = new Vector2(3, 0.25)
        this.addComponent(new BulletSpeed(), {speed: 200})
        this.addComponent(new KnifeBulletController())
        this.addComponent(new Collider(), {isTrigger:true})
    }
}