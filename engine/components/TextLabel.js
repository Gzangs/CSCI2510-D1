class TextLabel extends Component{
    fillStyle = "black" //still error color
    text = "[BLANK]" //error text

    draw(ctx) {
        let position = this.transform.position

        //singaling to context that i will draw something
        ctx.save()

        //set center of object, trasnlate is algebra definition
        ctx.translate(position.x, position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle

        ctx.fillText(this.text, 0, 0)

        //signaling done drawing
        ctx.restore()
    }
}