class Level02 extends Scene{
    constructor(){
        super("lightcyan")
        this.instantiate(new EnemyGameObject(), new Vector2(500, -150), Math.PI)
        this.instantiate(new ShotgunEnemyGameObject(), new Vector2(500, -250), Math.PI)
        this.instantiate(new EightShotEnemyGameObject(), new Vector2(125, -400), Math.PI)
        this.instantiate(new HomingShotEnemyGameObject(), new Vector2(600, -600), Math.PI)
        this.instantiate(new StarShotEnemyGameObject(), new Vector2(600, -900), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}