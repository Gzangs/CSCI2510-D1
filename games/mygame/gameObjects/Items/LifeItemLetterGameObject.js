class LifeItemLetterGameObject extends GameObject{
    constructor(){
        super("LifeItemLetter", ["Item"], "ships")
        this.addComponent(new TextLabel(), {text:"L", font:"40px Arial", fillStyle:"white"})
        
    }
}