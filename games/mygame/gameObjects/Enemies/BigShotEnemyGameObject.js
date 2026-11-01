class BigShotEnemyGameObject extends GameObject{
    constructor(){
        super("BigShotEnemy", ["Enemy"], "ships") //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "rgb(135, 17, 156)", points:Assets.triangle})
        this.transform.scale = new Vector2(4, 4)
        this.addComponent(new BigShotEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
    }
}