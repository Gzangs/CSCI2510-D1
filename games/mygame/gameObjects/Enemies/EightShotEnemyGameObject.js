class EightShotEnemyGameObject extends GameObject{
    constructor(){
        super("EightShotEnemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "rgb(1, 160, 25)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new EightShotEnemyController())
        this.addComponent(new Health(), {health:5})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    }
}