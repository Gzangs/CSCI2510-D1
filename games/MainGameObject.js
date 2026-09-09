class MainGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"red", points:[new Vector2(-20, 20), //rectangle
            new Vector2(-20, -50),
            new Vector2(20, -50),
            new Vector2(20, 20)
        ]})
    } 
}