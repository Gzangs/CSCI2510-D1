class WinScreen extends Scene{
    constructor(){
        super("yellow")

        let text = new GameObject("WinText", [], "UI")
        text.addComponent(new TextLabel(), {text:"y'our'e winer", font:"48px Comic Relief", fillStyle:"black"})
        this.instantiate(text, new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2))
        this.instantiate(new PointsGameObject(), new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2 + 100))
    }
}