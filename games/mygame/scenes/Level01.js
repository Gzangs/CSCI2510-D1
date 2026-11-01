class Level01 extends Scene{ //inherit everything from Scene
    constructor(){
        super("lightyellow") //find in superclass aka parent
        //this.instantiate(new PlayerGameObject(), new Vector2(50, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(500, -100), Math.PI)
        this.instantiate(new ChainHomingShotEnemyGameObject(), new Vector2(1100, -300), Math.PI)
        this.instantiate(new ShotgunHomingShotEnemyGameObject(), new Vector2(100, -300), Math.PI)
        this.instantiate(new BlasterBossGameObject(), new Vector2(600, -600), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(600, -900), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}