class StartButtonController extends Component{
    update(){
        if(Input.mouseButtonsUpThisFrame.includes(0) && Collisions.isCollisionPointPolygon(Input.mousePosition, this.gameObject)){
            SceneManager.loadScene(Level01)
        }
    }
}

class HelpButtonController extends Component{
    update(){
        if(Input.mouseButtonsUpThisFrame.includes(0) && Collisions.isCollisionPointPolygon(Input.mousePosition, this.gameObject)){
            SceneManager.loadScene(HelpScreen)
        }
    }
}

class StartScreen extends Scene{
    constructor(){
        super("white")

        let title = new RectGameObject("TitleText", [], "UI")
        title.addComponent(new TextLabel(), {text:"ThreeRake", fillStyle:"black", textAlign:"center"})
        //this.instantiate(title, new Vector2(window.innerWidth/3, window.innerHeight/4)) //window instead of engine because this instanly loads in first scene

        const titleText = this.instantiate(title)
        titleText.transform.anchorMin = new Vector2(0.5, 0.3)
        titleText.transform.anchorMax = new Vector2(0.5, 0.3)
        titleText.transform.offsetUpperLeft = new Vector2(-30, -30)
        titleText.transform.offsetLowerRight = new Vector2(0, 0)
        

        let start = new RectGameObject("StartButton", [], "UI")
        start.addComponent(new Polygon(), {fillStyle:"rgba(0, 255, 0, 0.3)", points:Assets.square})
        start.addComponent(new Collider())
        start.addComponent(new StartButtonController())
        //this.instantiate(start, new Vector2(window.innerWidth/2.5, window.innerHeight/2))

        let startText = new RectGameObject("StartButton", [], "UI")
        startText.addComponent(new TextLabel(), {text:"Start", fillStyle:"black", textAlign:"center"})

        const startButton = this.instantiate(start)
        startButton.transform.anchorMin = new Vector2(0.5, 0.5)
        startButton.transform.anchorMax = new Vector2(0.5, 0.5)
        startButton.transform.offsetUpperLeft = new Vector2(-10, -5)
        startButton.transform.offsetLowerRight = new Vector2(0, 0)

        const startButtonText = this.instantiate(startText)
        startButtonText.transform.anchorMin = new Vector2(0.5, 0.525)
        startButtonText.transform.anchorMax = new Vector2(0.5, 0.525)
        startButtonText.transform.offsetUpperLeft = new Vector2(-10, -10)
        startButtonText.transform.offsetLowerRight = new Vector2(0, 0)
        

        let help = new RectGameObject("HelpButton", [], "UI")
        help.addComponent(new Polygon(), {fillStyle:"rgba(255, 255, 0, 0.3)", points:Assets.square})
        help.addComponent(new Collider())
        help.addComponent(new HelpButtonController())
        //this.instantiate(help, new Vector2(window.innerWidth/2.5, window.innerHeight/2 + 100))

        let helpText = new RectGameObject("HelpButton", [], "UI")
        helpText.addComponent(new TextLabel(), {text:"Help", fillStyle:"black", textAlign:"center"})

        const helpButton = this.instantiate(help)
        helpButton.transform.anchorMin = new Vector2(0.5, 0.7)
        helpButton.transform.anchorMax = new Vector2(0.5, 0.7)
        helpButton.transform.offsetUpperLeft = new Vector2(-10, -5)
        helpButton.transform.offsetLowerRight = new Vector2(0, 0)

        const helpButtonText = this.instantiate(helpText)
        helpButtonText.transform.anchorMin = new Vector2(0.5, 0.725)
        helpButtonText.transform.anchorMax = new Vector2(0.5, 0.725)
        helpButtonText.transform.offsetUpperLeft = new Vector2(-10, -10)
        helpButtonText.transform.offsetLowerRight = new Vector2(0, 0)
    }
}
