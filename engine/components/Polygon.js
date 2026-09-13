class Polygon extends Component {
    fillStyle = "magenta" //bug color
    points = []

    draw(ctx) {
        let position = this.transform.position

        //singaling to context that i will draw something
        ctx.save()

        //set center of object, trasnlate is algebra definition
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }



        ctx.fillStyle = this.fillStyle
        ctx.fill()

        //signaling done drawing
        ctx.restore()
    }
}