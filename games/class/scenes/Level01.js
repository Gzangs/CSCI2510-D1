class Level01 extends Scene{ //inherit everything from Scene
    constructor(){
        super("black") //find in superclass aka parent, black is the color of background but broken
        //this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(25, 150), Math.PI)
        //this.instantiate(new PointsGameObject(), new Vector2(0, 20))
        this.instantiate(new LevelControllerGameObject())
    }
}