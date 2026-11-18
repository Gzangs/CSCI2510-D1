class WinScreen extends Scene{
    constructor(){
        super("yellow")

        let text = new RectGameObject("WinText", [], "UI")
        text.addComponent(new TextLabel(), {text:"y'our'e winer", fillStyle:"black"})
        const winText = this.instantiate(text)
        winText.transform.anchorMin = new Vector2(0.5, 0.5)
        winText.transform.anchorMax = new Vector2(0.5, 0.5)
        winText.transform.offsetUpperLeft = new Vector2(-150, -60)
        winText.transform.offsetLowerRight = new Vector2(-140, -50)
        //this.instantiate(text, new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2))
        //this.instantiate(new PointsGameObject(), new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2 + 100))

        const points = this.instantiate(new PointsGameObject())
        points.transform.anchorMin = new Vector2(0.5, 0.5)
        points.transform.anchorMax = new Vector2(0.5, 0.5)
        points.transform.offsetUpperLeft = new Vector2(-150, 50)
        points.transform.offsetLowerRight = new Vector2(-140, 60)
    }
}