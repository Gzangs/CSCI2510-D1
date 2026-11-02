class RecoverItemLetterGameObject extends GameObject{
    constructor(){
        super("ItemLetter", ["Item"], "ships")
        this.addComponent(new TextLabel(), {text:"R", font:"40px Arial", fillStyle:"white"})
        
    }
}