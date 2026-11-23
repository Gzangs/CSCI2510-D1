class ClosingScene extends Scene{
    constructor(){
        super("red")
        const openingText = new RectGameObject("Die", [], "UI")
        openingText.addComponent(new TextLabel(), {text: "Die", textAlign:"center", textBaseline:"middle", font:"50px sans"})
        openingText.transform.anchorMin = new Vector2(0.5, 0.25)
        openingText.transform.anchorMax = new Vector2(0.5, 0.25)
        openingText.transform.offsetUpperLeft = new Vector2(0, 0)
        openingText.transform.offsetLowerRight = new Vector2(1, 1)
        openingText.transform.useLetterBoxing = true
        this.instantiate(openingText)
        const closingSceneControllerGameObject = new GameObject("Opening Scene Controller", [], "UI")
        closingSceneControllerGameObject.addComponent(new ClosingSceneController())
        this.instantiate(closingSceneControllerGameObject)
    }
}
