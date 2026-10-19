class StarBulletGameObject extends GameObject{
    constructor(){
        super("StarBullet", ["Bullet"], "lasers")
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.star})
        this.transform.scale = new Vector2(1.25, 1.25)
        this.addComponent(new StarBulletController())
    }
}