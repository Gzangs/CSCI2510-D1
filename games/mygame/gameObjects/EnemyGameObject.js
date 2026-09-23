class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"]) //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "mediumvioletred", points:Assets.triangle})
        this.transform.scale = new Vector2(2, 2)
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:3})
    }
}