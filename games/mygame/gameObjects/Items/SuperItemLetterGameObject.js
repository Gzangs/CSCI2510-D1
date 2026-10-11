class SuperItemLetterGameObject extends GameObject{
    constructor(){
        super("SuperItemLetter", ["Item"], "ships")
        this.addComponent(new TextLabel(), {text:"S", font:"40px Arial", fillStyle:"red"})
    }
}