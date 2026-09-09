class LaserGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle:"orange", points:[new Vector2(0, -10),
            new Vector2(5, 5),
            new Vector2(-5, 5)
        ]})
    }
}   