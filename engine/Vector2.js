class Vector2 { //because two components, x and y
    x
    y

    constructor(x, y){
        this.x = x
        this.y = y
    }

    clone(){
        return new Vector2(this.x, this.y)
    }
}