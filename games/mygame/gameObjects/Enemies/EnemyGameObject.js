class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"], "ships") //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "rgb(172, 0, 0)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
    }
}