class MainScene extends Scene{ //inherit everything from Scene
    constructor(){
        super() //find in superclass aka parent
        this.instantiate(new MainGameObject())
    }
}