class ItemLetterGameObject extends GameObject{
    constructor(){
        super("ItemLetter", ["Item"], "ships")
        this.addComponent(new TextLabel(), {text:"P", font:"40px Arial", fillStyle:"white"})
        
    }
}