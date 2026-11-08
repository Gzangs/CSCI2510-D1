class UIPanelGameObject extends GameObject {
    constructor(){
        super("UIPanelGameObject", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: "thistle", points: Assets.square})
        this.addComponent(new UIPanelController())
        this.transform.scale = new Vector2(window.innerWidth / 120, window.innerHeight / 40)
    }
}