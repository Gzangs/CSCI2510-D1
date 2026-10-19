class GenericLevel extends Scene{ //this has things that every level has
    constructor(){
        super() //dont name scenes
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new PointsGameObject(), new Vector2(0, 20))

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(50, 50))

        helperGameObject.transform.setParent(mainGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new TextLabel(), {fillStyle:"gray", font:"30px Comic Relief"})
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(0, 50))

        let wrappedText = new GameObject("WrappedText", [], "UI")
        wrappedText.addComponent(new MultiLineTextLabel(), {fillStyle:"gray", font:"25px Comic Relief", text:"heres a really long string of text so it can wrap and its so long oh my its too much lorem ipsum blah blah blah heres some more text"})
        this.instantiate(wrappedText, new Vector2(0,100))
    }
}