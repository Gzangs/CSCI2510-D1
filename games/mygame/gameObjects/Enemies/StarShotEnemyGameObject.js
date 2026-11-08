class StarShotEnemyGameObject extends GameObject{
    constructor(){
        super("StarShotEnemy", ["Enemy"], "ships") //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "rgb(200, 189, 38)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new StarShotEnemyController())
        this.addComponent(new Health(), {health:5})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    }
}