class ShotgunHomingShotEnemyGameObject extends GameObject{
    constructor(){
        super("ShotgunHomingShotEnemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "rgb(181, 134, 68)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new ShotgunHomingShotEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    }
}