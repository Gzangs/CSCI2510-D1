class Transform extends Component{
    position = new Vector2(0,0)
    scale = new Vector2(1,1) //default 1,1 because multiply
    rotation = 0 //use radians

    parent

    setParent(parentTransform){
        this.parent = parentTransform
    }

    getLocalMatrix(){
        let matrix = new DOMMatrix()
        matrix.translateSelf(this.position.x, this.position.y)
        matrix.scaleSelf(this.scale.x, this.scale.y)
        matrix.rotateSelf(this.rotation * 180 / Math.PI) //rotateSelf works in degrees 
        return matrix
    }

    getWorldMatrix(){
        if(!this.parent){
            return this.getLocalMatrix()
        }

        return this.parent.getWorldMatrix().multiply(this.getLocalMatrix())
    }
}