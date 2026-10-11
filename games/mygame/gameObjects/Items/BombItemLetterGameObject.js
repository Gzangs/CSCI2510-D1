class BombItemLetterGameObject extends GameObject{
    constructor(){
        super("BombItemLetter", ["Item"], "ships")
        this.addComponent(new TextLabel(), {text:"B", font:"40px Arial", fillStyle:"white"})
        
    }
}