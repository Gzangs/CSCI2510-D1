class EightShotEnemyGameObject extends GameObject{
    constructor(){
        super("EightShotEnemy", ["Enemy"])
        this.addComponent(new Polygon(), {fillStyle: "green", points:Assets.triangle})
        this.transform.scale = new Vector2(2, 2)
        this.addComponent(new EightShotEnemyController())
        this.addComponent(new Health(), {health:5})
    }
}