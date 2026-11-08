class ChainHomingShotEnemyGameObject extends GameObject{
    constructor(){
        super("ChainHomingShotEnemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "rgb(59, 91, 255)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new ChainHomingShotEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    }
}