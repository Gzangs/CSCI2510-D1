class BlasterBossGameObject extends GameObject{
    constructor(){
        super("BlasterBoss", ["Enemy", "Boss"], "ships") //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "rgb(228, 35, 167)", points:Assets.triangle})
        this.transform.scale = new Vector2(6, 5)
        this.addComponent(new BlasterBossController())
        this.addComponent(new Health(), {health:75})
        this.addComponent(new Collider())
    }
}