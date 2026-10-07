class Component{
    /** @type(GameObject) */ //gives red squigilly lines
    gameObject

    didStart = false

    get transform(){
        return this.gameObject.transform
    }

}