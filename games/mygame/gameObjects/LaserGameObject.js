class LaserGameObject extends GameObject{
    constructor(){
        super("Laser")
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.triangle})
        this.transform.scale = new Vector2(1, 1.25)
    }
}   