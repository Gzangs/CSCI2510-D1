class HighScoreGameObject extends GameObject {
    constructor(){
        super("HighScoreGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"High score: 0 points"})
        this.addComponent(new HighScoreController())
        this.transform.scale = new Vector2(3, 3)
    }
}