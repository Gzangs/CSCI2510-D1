class GenericLevel extends Scene{ //this has things that every level has
    constructor(){
        super() //dont name scenes
        this.instantiate(new MainGameObject(), new Vector2(window.innerWidth / 3, window.innerHeight / 1.125))

        let panel = new GameObject("Panel")
        panel.addComponent(new Polygon(), {fillStyle: "thistle", points: Assets.square})
        panel.transform.scale = new Vector2(window.innerWidth / 60, window.innerHeight)
        this.instantiate(panel, new Vector2((window.innerWidth)+20, window.innerHeight))

        this.instantiate(new PointsGameObject(), new Vector2(window.innerWidth / 1.4, 50))
        this.instantiate(new HighScoreGameObject(), new Vector2(window.innerWidth / 1.4, 100))
        this.instantiate(new PowerDisplayGameObject(), new Vector2(window.innerWidth / 1.4, 150))
        this.instantiate(new BombDisplayGameObject(), new Vector2(window.innerWidth / 1.4, 200))
        this.instantiate(new LivesDisplayGameObject(), new Vector2(window.innerWidth / 1.4, 300))
    }
}