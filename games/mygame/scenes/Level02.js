class Level02 extends Scene{
    constructor(){
        super()
        this.instantiate(new EnemyGameObject(), new Vector2(150, -150), Math.PI)
        this.instantiate(new EightShotEnemyGameObject(), new Vector2(125, -400), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}