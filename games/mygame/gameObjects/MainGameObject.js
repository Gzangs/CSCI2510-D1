class MainGameObject extends GameObject{
    constructor(){
        super("Main", ["Main"], "ships")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"salmon", points:Assets.rectangle})
    } 
}