class MainGameObject extends GameObject{
    constructor(){
        super("Main", ["Main"])
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"salmon", points:Assets.rectangle})
    } 
}