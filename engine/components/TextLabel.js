class TextLabel extends Component{
    fillStyle = "black" //still error color
    text = "[BLANK]" //error text
    font = "10px Comic Relief" //fonts.google.com for fonts you can use
    textAlign = "left" //horizontal alignment "center", "right"
    textBaseline = "alphabetic" //vertical alignment "top", "hanging", "middle", "alphabetic", "ideographic", "bottom"

    draw(ctx) {
        let position = this.transform.position

        //singaling to context that i will draw something
        ctx.save()

        //set center of object, trasnlate is algebra definition
        //ctx.translate(position.x, position.y)
        //ctx.scale(this.transform.scale.x, this.transform.scale.y)
        //ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle

        ctx.font = this.font

        ctx.textAlign = this.textAlign
        ctx.textBaseline= this.textBaseline

        ctx.fillText(this.text, 0, 0)

        //signaling done drawing
        ctx.restore()
    }
}