class GenericLevel extends Scene{ //this has things that every level has
    constructor(){
        super() //dont name scenes
        this.instantiate(new PlayerGameObject(), new Vector2(Engine.canvas.width / 3, Engine.canvas.height / 1.125))

        this.instantiate(new UIPanelGameObject(), new Vector2(Engine.canvas.width * 5 / 6 + 20, Engine.canvas.height / 2))
        //this.instantiate(new UIPanelGameObject(), new Vector2((Engine.canvas.width)+20, Engine.canvas.height))
        //this.instantiate(new PointsGameObject(), new Vector2(Engine.canvas.width / 1.4, 50))
        //this.instantiate(new HighScoreGameObject(), new Vector2(Engine.canvas.width / 1.4, 100))
        //this.instantiate(new PowerDisplayGameObject(), new Vector2(Engine.canvas.width / 1.4, 200))
        //this.instantiate(new BombDisplayGameObject(), new Vector2(Engine.canvas.width / 1.4, 250))
        //this.instantiate(new LivesDisplayGameObject(), new Vector2(Engine.canvas.width / 1.4, 300))
        //this.instantiate(new BossHealthDisplayGameObject(), new Vector2(Engine.canvas.width / 1.4, 450))
        Camera.main.transform.position = new Vector2(Engine.canvas.width / 2, Engine.canvas.height / 2)

        const points = this.instantiate(new PointsGameObject())
        points.transform.anchorMin = new Vector2(5/7, 0.1)
        points.transform.anchorMax = new Vector2(5/7, 0.1)
        points.transform.offsetUpperLeft = new Vector2(0, 0)
        points.transform.offsetLowerRight = new Vector2(7.5, 7.5)

        const highScore = this.instantiate(new HighScoreGameObject())
        highScore.transform.anchorMin = new Vector2(5/7, 0.2)
        highScore.transform.anchorMax = new Vector2(5/7, 0.2)
        highScore.transform.offsetUpperLeft = new Vector2(0, 0)
        highScore.transform.offsetLowerRight = new Vector2(7.5, 7.5)

        const bossHealth = this.instantiate(new BossHealthDisplayGameObject())
        bossHealth.transform.anchorMin = new Vector2(5/7, 0.4)
        bossHealth.transform.anchorMax = new Vector2(5/7, 0.4)
        bossHealth.transform.offsetUpperLeft = new Vector2(0, 0)
        bossHealth.transform.offsetLowerRight = new Vector2(7.5, 7.5)

        const power = this.instantiate(new PowerDisplayGameObject())
        power.transform.anchorMin = new Vector2(5/7, 0.6)
        power.transform.anchorMax = new Vector2(5/7, 0.6)
        power.transform.offsetUpperLeft = new Vector2(0, 0)
        power.transform.offsetLowerRight = new Vector2(7.5, 7.5)

        const bomb = this.instantiate(new BombDisplayGameObject())
        bomb.transform.anchorMin = new Vector2(5/7, 0.7)
        bomb.transform.anchorMax = new Vector2(5/7, 0.7)
        bomb.transform.offsetUpperLeft = new Vector2(0, 0)
        bomb.transform.offsetLowerRight = new Vector2(7.5, 7.5)

        const lives = this.instantiate(new LivesDisplayGameObject())
        lives.transform.anchorMin = new Vector2(5/7, 0.8)
        lives.transform.anchorMax = new Vector2(5/7, 0.8)
        lives.transform.offsetUpperLeft = new Vector2(0, 0)
        lives.transform.offsetLowerRight = new Vector2(7.5, 7.5)

 
    }
}