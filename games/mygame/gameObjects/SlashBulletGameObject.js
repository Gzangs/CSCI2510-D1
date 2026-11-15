class SlashBulletGameObject extends GameObject{
    constructor(){
        super("SlashBullet", [""], "lasers")
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.rectangle})
        this.transform.scale = new Vector2(0.1, 100)
        this.addComponent(new SlashBulletController())
        this.addComponent(new Collider(), {isTrigger:true})
    }
}