class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy")
        this.addComponent(new Polygon(), {fillStyle: "green", points:Assets.triangle})
        this.transform.scale = new Vector2(2, 2)
        this.addComponent(new EnemyController())
    }
}