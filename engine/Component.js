class Component{
    gameObject

    get transform(){
        return this.gameObject.transform
    }

    destroy(){
        this.gameObject.destroy()
    }
}