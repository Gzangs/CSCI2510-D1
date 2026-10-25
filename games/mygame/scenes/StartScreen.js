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

        let title = new GameObject("TitleText", [], "UI")
        title.addComponent(new TextLabel(), {text:"ThreeRake", font:"100px Comic Relief", fillStyle:"black"})
        this.instantiate(title, new Vector2(Engine.canvas.width/3, Engine.canvas.height/4))
        
        let start = new GameObject("StartButton", [], "UI")
        start.addComponent(new TextLabel(), {text:"Start", font:"60px Comic Relief", fillStyle:"black"})
        start.addComponent(new Polygon(), {fillStyle:"rgba(0, 255, 0, 0.3)", points:[new Vector2(0, 20), new Vector2(180, 20), new Vector2(180, -60), new Vector2(0, -60)]})
        start.addComponent(new Collider())
        start.addComponent(new StartButtonController())
        this.instantiate(start, new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2))

        let help = new GameObject("HelpButton", [], "UI")
        help.addComponent(new TextLabel(), {text:"Help", font:"48px Comic Relief", fillStyle:"black"})
        help.addComponent(new Polygon(), {fillStyle:"rgba(255, 255, 0, 0.3)", points:[new Vector2(0, 20), new Vector2(140, 20), new Vector2(140, -60), new Vector2(0, -60)]})
        help.addComponent(new Collider())
        help.addComponent(new HelpButtonController())
        this.instantiate(help, new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/2 + 100))

    }

    onMouseOver(){
        if(Input.mouseButtonsUpThisFrame.includes(0)){
            SceneManager.loadScene(Level01)
        }
    }
}
