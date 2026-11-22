class KnifeBulletGameObject extends GameObject{
    constructor(){
        super("KnifeBullet", ["Bullet"], "lasers")
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.rectangle})
        this.transform.scale = new Vector2(25, 0.25)
        this.addComponent(new BulletSpeed(), {speed: 400})
        this.addComponent(new BulletController())
        this.addComponent(new Collider(), {isTrigger:true})
    }
}