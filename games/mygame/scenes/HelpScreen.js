class BackButtonController extends Component{
    update(){
        if(Input.mouseButtonsUpThisFrame.includes(0) && Collisions.isCollisionPointPolygon(Input.mousePosition, this.gameObject)){
            SceneManager.loadScene(StartScreen)
        }
    }
}

class HelpScreen extends Scene{
    constructor(){
        super("white")

        let back = new GameObject("BackButton", [], "UI")
        back.addComponent(new Polygon(), {fillStyle:"rgba(255, 0, 0, 0.3)", points:[new Vector2(0, 20), new Vector2(140, 20), new Vector2(140, -60), new Vector2(0, -60)]})
        back.addComponent(new TextLabel(), {text:"Back", font:"60px Comic Relief", fillStyle:"black"})
        back.addComponent(new Collider())
        back.addComponent(new BackButtonController())
        this.instantiate(back, new Vector2(Engine.canvas.width/2.5, Engine.canvas.height/1.1))

        let text1 = new GameObject("HelpText", [], "UI")
        text1.addComponent(new TextLabel(), {text:"Controls: Move with WASD, Focus with O, Bomb with P", font:"40px Comic Relief", fillStyle:"black"})
        this.instantiate(text1, new Vector2(Engine.canvas.width/10, Engine.canvas.height/10))

        let text2 = new GameObject("HelpText", [], "UI")
        text2.addComponent(new TextLabel(), {text:"Alt Controls: Move with Arrow Keys, Focus with LShift, Bomb with Z", font:"40px Comic Relief", fillStyle:"black"})
        this.instantiate(text2, new Vector2(Engine.canvas.width/10, Engine.canvas.height/10 + 60))

        let text3 = new GameObject("HelpText", [], "UI")
        text3.addComponent(new TextLabel(), {text:"Items: [P] inceases power by 1, [S] increases power by 5,", font:"40px Comic Relief", fillStyle:"black"})
        this.instantiate(text3, new Vector2(Engine.canvas.width/10, Engine.canvas.height/10 + 180))

        let text4 = new GameObject("HelpText", [], "UI")
        text4.addComponent(new TextLabel(), {text:" [B] gives 1 bomb, [L] gives 1 life", font:"40px Comic Relief", fillStyle:"black"})
        this.instantiate(text4, new Vector2(Engine.canvas.width/10, Engine.canvas.height/10 + 240))

        let text5 = new GameObject("HelpText", [], "UI")
        text5.addComponent(new TextLabel(), {text:"When dying you lose half power and the bomb count resets to 3", font:"40px Comic Relief", fillStyle:"black"})
        this.instantiate(text5, new Vector2(Engine.canvas.width/10, Engine.canvas.height/10 + 360))
    }
}