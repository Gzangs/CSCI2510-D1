class ShotgunEnemyGameObject extends GameObject{
    constructor(){
        super("ShotgunEnemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "rgb(102, 0, 0)", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new ShotgunEnemyController())
        this.addComponent(new Health(), {health:3})
        this.addComponent(new Collider())
    }
}