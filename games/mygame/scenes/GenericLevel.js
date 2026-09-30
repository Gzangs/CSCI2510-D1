class GenericLevel extends Scene{ //this has things that every level has
    constructor(){
        super() //dont name scenes
        this.instantiate(new MainGameObject(), new Vector2(Engine.canvas.width / 3, Engine.canvas.height / 1.125))

        this.instantiate(new UIPanelGameObject(), new Vector2(Engine.canvas.width * 5 / 6 + 20, Engine.canvas.height / 2))
        //this.instantiate(new UIPanelGameObject(), new Vector2((Engine.canvas.width)+20, Engine.canvas.height))
        this.instantiate(new PointsGameObject(), new Vector2(Engine.canvas.width / 1.4, 50))
        this.instantiate(new HighScoreGameObject(), new Vector2(Engine.canvas.width / 1.4, 100))
        this.instantiate(new PowerDisplayGameObject(), new Vector2(Engine.canvas.width / 1.4, 150))
        this.instantiate(new BombDisplayGameObject(), new Vector2(Engine.canvas.width / 1.4, 200))
        this.instantiate(new LivesDisplayGameObject(), new Vector2(Engine.canvas.width / 1.4, 300))
        Camera.main.transform.position = new Vector2(Engine.canvas.width / 2, Engine.canvas.height / 2)
        Camera.main.backgroundColor = "lightyellow"
    }
}