class HomingShotEnemyGameObject extends GameObject{
    constructor(){
        super("HomingShotEnemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "darkorange", points:Assets.triangle})
        this.transform.scale = new Vector2(2, 2)
        this.addComponent(new HomingShotEnemyController())
        this.addComponent(new Health(), {health:3})
    }
}