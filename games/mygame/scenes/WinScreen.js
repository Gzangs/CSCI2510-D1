class WinController extends Component{
    update(){
        if(Input.keysDown.includes("Space")){
            Globals.points = 0
            Globals.power = 0
            Globals.bombs = 3
            Globals.lives = 5
            Globals.cameraScroll = true
            Globals.bossHealth = 0
            SceneManager.loadScene(StartScreen)
        }
    }
}

class WinScreen extends Scene{
    constructor(){
        super("yellow")

        let text = new RectGameObject("WinText", [], "UI")
        text.addComponent(new TextLabel(), {text:"y'our'e winer", fillStyle:"black", textAlign:"center"})
        const winText = this.instantiate(text)
        winText.transform.anchorMin = new Vector2(0.5, 0.5)
        winText.transform.anchorMax = new Vector2(0.5, 0.5)
        winText.transform.offsetUpperLeft = new Vector2(0, -60)
        winText.transform.offsetLowerRight = new Vector2(10, -50)
        //this.instantiate(text, new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2))
        //this.instantiate(new PointsGameObject(), new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2 + 100))

        const points = this.instantiate(new PointsGameObject())
        points.transform.anchorMin = new Vector2(0.5, 0.5)
        points.transform.anchorMax = new Vector2(0.5, 0.5)
        points.transform.offsetUpperLeft = new Vector2(-100, 50)
        points.transform.offsetLowerRight = new Vector2(-90, 60)

        let spaceText = new RectGameObject("WinText", [], "UI")
        spaceText.addComponent(new TextLabel(), {text:"Space: Back to Title", fillStyle:"black", textAlign:"center"})
        const spaceTextObject = this.instantiate(spaceText)
        spaceTextObject.transform.anchorMin = new Vector2(0.5, 0.8)
        spaceTextObject.transform.anchorMax = new Vector2(0.5, 0.8)
        spaceTextObject.transform.offsetUpperLeft = new Vector2(0, -55)
        spaceTextObject.transform.offsetLowerRight = new Vector2(5, -50)
        spaceTextObject.addComponent(new WinController())
    }
}