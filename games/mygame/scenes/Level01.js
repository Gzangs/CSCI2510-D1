class Level01 extends Scene{ //inherit everything from Scene
    constructor(){
        super("lightyellow") //find in superclass aka parent
        //this.instantiate(new PlayerGameObject(), new Vector2(50, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(500, -150), Math.PI)
        this.instantiate(new StarShotEnemyGameObject(), new Vector2(600, -900), Math.PI)
        this.instantiate(new KamikazeEnemyGameObject(), new Vector2(400, -1000), Math.PI)
        this.instantiate(new ChainHomingShotEnemyGameObject(), new Vector2(300, -1400), Math.PI)
        this.instantiate(new ShotgunHomingShotEnemyGameObject(), new Vector2(700, -1400), Math.PI)
        this.instantiate(new KnightBossGameObject(), new Vector2(Engine.canvas.width / 3, -1800), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}