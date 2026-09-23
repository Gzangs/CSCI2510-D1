class GenericLevel extends Scene{ //this has things that every level has
    constructor(){
        super() //dont name scenes
        this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new PointsGameObject(), new Vector2(0, 20))
    }
}