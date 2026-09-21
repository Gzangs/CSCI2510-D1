class MainScene extends Scene{ //inherit everything from Scene
    constructor(){
        super() //find in superclass aka parent
        this.instantiate(new MainGameObject(), new Vector2(window.innerWidth / 3, window.innerHeight / 1.125))
        this.instantiate(new EnemyGameObject(), new Vector2(25, 150), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(200, 200), Math.PI)
        //this.addComponent(new Polygon(), new Vector2(window.innerWidth / 3, window.innerHeight / 1.125) {fillStyle: "black", points:Assets.square})

        let panel = new GameObject("Panel")
        panel.addComponent(new Polygon(), {fillStyle: "thistle", points: Assets.square})
        panel.transform.scale = new Vector2(window.innerWidth / 60, window.innerHeight)
        this.instantiate(panel, new Vector2((window.innerWidth * 1)+20, window.innerHeight))
    }
}