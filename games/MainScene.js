class MainScene extends Scene{ //inherit everything from Scene
    constructor(){
        super() //find in superclass aka parent
        this.instantiate(new MainGameObject(), new Vector2(window.innerWidth / 2, window.innerHeight / 1.25))
    }
}