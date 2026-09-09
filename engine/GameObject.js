class GameObject{
    components = []

    get transform(){
        return this.components[0];
    }

    constructor(){
        this.addComponent(new Transform())
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this //put the instance of me into gameObject
    }

    start(){
        for(const component of this.components){
            component.start?.() //?. is elvis operator, call this function if it exists, don't call if doesn't exist
        }
    }

    update(){
        for(const component of this.components){
            component.update?.()
        }
    }

    draw(ctx){
        for(const component of this.components){
            component.draw?.(ctx)
        }
    }
}