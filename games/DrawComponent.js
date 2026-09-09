class DrawComponent extends Component {
    draw(ctx) {
        let position = this.transform.position

        //singaling to context that i will draw something
        ctx.save()

        //set center of object, trasnlate is algebra definition
        ctx.translate(position.x, position.y)

        /* ctx.lineTo(0, -90) //triangle shape
        ctx.lineTo(-90, 90)
        ctx.lineTo(90, -120)
        ctx.lineTo(-20, 30)
        ctx.lineTo(90, 20) */

        /* ctx.lineTo(0, -20) //half bat
        ctx.lineTo(10, -30)
        ctx.lineTo(10, 0)
        ctx.lineTo(50, -40)
        ctx.lineTo(60, -50)
        ctx.lineTo(55, 0)
        ctx.lineTo(0, 40) */

        ctx.beginPath()
        ctx.lineTo(-20, 20) //rectangle
        ctx.lineTo(-20, -50)
        ctx.lineTo(20, -50)
        ctx.lineTo(20, 20)



        ctx.fillStyle = "black"
        ctx.fill()

        //signaling done drawing
        ctx.restore()
    }
}