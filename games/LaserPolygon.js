class LaserPolygon extends Component {
    draw(ctx) {
        let position = this.transform.position

        //singaling to context that i will draw something
        ctx.save()

        //set center of object, trasnlate is algebra definition
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0, -10) 
        ctx.lineTo(5, 5)
        ctx.lineTo(-5, 5)



        ctx.fillStyle = "green"
        ctx.fill()

        //signaling done drawing
        ctx.restore()
    }
}