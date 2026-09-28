class Level02 extends Scene{
    constructor(){
        super()
        this.instantiate(new EnemyGameObject(), new Vector2(150, 600), Math.PI)
        this.instantiate(new EightShotEnemyGameObject(), new Vector2(125, 150), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}