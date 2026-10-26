class BigShotEnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"], "ships") //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "indianred", points:Assets.triangle})
        this.transform.scale = new Vector2(3, 3)
        this.addComponent(new BigShotEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
    }
}