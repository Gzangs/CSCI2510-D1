class KamikazeEnemyGameObject extends GameObject{
    constructor(){
        super("KamikazeEnemy", ["Enemy"], "ships") //named enemy and tagged enemy
        this.addComponent(new Polygon(), {fillStyle: "rgb(246, 39, 222)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new KamikazeEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    }
}