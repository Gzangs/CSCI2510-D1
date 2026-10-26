class Level01 extends Scene{ //inherit everything from Scene
    constructor(){
        super("lightyellow") //find in superclass aka parent
        //this.instantiate(new PlayerGameObject(), new Vector2(50, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(500, -100), Math.PI)
        this.instantiate(new BigShotEnemyGameObject(), new Vector2(800, -100), Math.PI)
        this.instantiate(new HomingShotEnemyGameObject(), new Vector2(700, -300), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}