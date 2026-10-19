class MultiLineTextLabel extends Component{
    fillStyle = "black" //still error color
    text = "[BLANK]" //error text
    font = "10px Comic Relief" //fonts.google.com for fonts you can use
    maxWidth = 150

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

        //let measurement = ctx.measureText(this.text)
        let fontHeight = ctx.measureText("").fontBoundingBoxAscent + ctx.measureText("").fontBoundingBoxDescent
        let y = 0
        let safeLine = ""
        let possibleLine = ""
        for(let word of this.text.split(" ")){ //split creates an array of words without spaces
            possibleLine = safeLine + word + " " 

            if(ctx.measureText(possibleLine).width > this.maxWidth){
                ctx.fillText(safeLine, 0, y)
                y += fontHeight
                safeLine = word + " "
            }
            else{
                safeLine = possibleLine
            }
        }
        ctx.fillText(safeLine, 0, y) //print last line

        //ctx.fillText(this.text, 0, 0)

        //signaling done drawing
        ctx.restore()
    }
}