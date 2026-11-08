class Collider extends Component{

    isTrigger = false
    _points //variable with different name


    get points(){
        return this._points ?? this.gameObject.getComponent(Polygon).points //?? is null coalescing operator, if null or undefined use other part
    }
    set points(points){
        this._points = points
    }
}