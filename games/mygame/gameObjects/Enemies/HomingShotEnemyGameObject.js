class HomingShotEnemyGameObject extends GameObject{
    constructor(){
        super("HomingShotEnemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "rgb(255, 182, 37)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new HomingShotEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    }
}