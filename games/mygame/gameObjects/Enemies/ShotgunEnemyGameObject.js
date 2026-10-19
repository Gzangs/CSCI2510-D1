class ShotgunEnemyGameObject extends GameObject{
    constructor(){
        super("ShotgunEnemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "firebrick", points:Assets.triangle})
        this.transform.scale = new Vector2(2, 2)
        this.addComponent(new ShotgunEnemyController())
        this.addComponent(new Health(), {health:3})
    }
}