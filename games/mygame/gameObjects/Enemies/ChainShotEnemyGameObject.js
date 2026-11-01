class ChainShotEnemyGameObject extends GameObject{
    constructor(){
        super("ChainShotEnemy", ["Enemy"], "ships") //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "rgb(22, 116, 156)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new ChainShotEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
    }
}