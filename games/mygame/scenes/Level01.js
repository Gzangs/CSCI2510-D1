class Level01 extends Scene{ //inherit everything from Scene
    constructor(){
        super("lightyellow") //find in superclass aka parent
        //this.instantiate(new PlayerGameObject(), new Vector2(50, 300))
        this.instantiate(new KnightBossGameObject(), new Vector2(Engine.canvas.width / 3, -100), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}