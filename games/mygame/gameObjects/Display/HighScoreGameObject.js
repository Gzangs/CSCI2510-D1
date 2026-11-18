class HighScoreGameObject extends RectGameObject {
    constructor(){
        super("HighScoreGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"HiScore: 0 points"})
        this.addComponent(new HighScoreController())
        this.transform.scale = new Vector2(1, 1)
        this.transform.useLetterBoxing = true
    }
}