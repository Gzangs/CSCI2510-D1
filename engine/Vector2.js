class Vector2 { //because two components, x and y
    x
    y

    constructor(x, y){
        this.x = x
        this.y = y
    }

    plus(other){
        return new Vector2(this.x + other.x, this.y + other.y)
    }

    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    get magnitude(){ //pythagorean theorem, theres also a math hypotenuse function
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }

    clone(){
        return new Vector2(this.x, this.y)
    }

    dot(other){
        return this.x*other.x + this.y*other.y
    }

    orthogonal(){
        return new Vector2(this.y, -this.x) //could negate y instead of x and the math is the same
    }

    normalized(){
        return new Vector2(this.x/this.magnitude, this.y/this.magnitude)
    }

    scaled(scaler){
        return new Vector2(this.x*scaler, this.y*scaler)
    }

    plusEquals(other){
        //return new Vector2(this.x + this.y, other.x + other.y)
        this.x += other.x
        this.y += other.y
    }
}