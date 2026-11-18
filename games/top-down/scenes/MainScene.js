class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new BoxGameObject(), new Vector2(50,0), 0)

    const uiButton = this.instantiate(new UIButton())
    uiButton.transform.anchorMin = new Vector2(0, 0)
    uiButton.transform.anchorMax = new Vector2(1, 0)
    uiButton.transform.offsetUpperLeft = new Vector2(50, 50)
    uiButton.transform.offsetLowerRight = new Vector2(-50, 150)
  }
}
