class ItemGameObject extends GameObject{
    constructor(){
        super("Item", [], "ships")
        this.addComponent(new ItemController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.square})
        //this.addComponent(new TextLabel(), {text:"P", font:"40px Arial", fillStyle:"white"})

        this.transform.scale = new Vector2(0.75, 0.75)
        
    }
}