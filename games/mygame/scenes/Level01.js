class Level01 extends Scene{ //inherit everything from Scene
    constructor(){
        super("lightyellow") //find in superclass aka parent
        //this.instantiate(new PlayerGameObject(), new Vector2(50, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(500, -100), Math.PI)
        this.instantiate(new BigShotEnemyGameObject(), new Vector2(700, -100), Math.PI)
        this.instantiate(new ChainHomingShotEnemyGameObject(), new Vector2(1100, -400), Math.PI)
        this.instantiate(new ShotgunHomingShotEnemyGameObject(), new Vector2(100, -400), Math.PI)
        this.instantiate(new BlasterBossGameObject(), new Vector2(600, -700), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(600, -1000), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}