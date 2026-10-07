class GameObject{
    components = []
    markForDestroy = false
    name
    tags = []
    layer = "default"

    get transform(){
        return this.components[0];
    }

    constructor(name, tags = [], layer = "default"){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
        this.layer = layer
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this //put the instance of me into gameObject
    }

    broadcastMessage(message, args = []){
        for(const component of this.components){
            component[message]?.(...args) //... is spread operator, if next word is an array seperate everything in it with commas
        }
    }

    start(){
        for(const component of this.components.filter(c=>!c.didStart)){ //only if didStart is false
            component.start?.() //?. is elvis operator, call this function if it exists, don't call if doesn't exist
            component.didStart = true
        }
    }

    update(){
        for(const component of this.components){
            component.update?.()
        }
    }

    draw(ctx){

        ctx.save()
        ctx.setTransform(ctx.getTransform().multiply(this.transform.getWorldMatrix()))

        for(const component of this.components){
            component.draw?.(ctx)
        }
        ctx.restore()
    }

    destroy(){
        this.markForDestroy = true
    }

    getComponent(type){
        return this.components.find(c=>c instanceof type) //return the first component that matches the type of something
    }

    static find(name){ //only finds one
        return SceneManager.currentScene.gameObjects.find(go=>go.name == name)
        //return Engine.currentScene.gameObjects.find(function(go){return go.name == name))
    }

    static findGameObjectsWithTag(tag){ //finds multiple
        return SceneManager.currentScene.gameObjects.filter(go=>go.tags.includes(tag))
    }

    static findGameObjectsByType(type){ //find things with a component of this type
        return SceneManager.currentScene.gameObjects.filter(go=>go.components.find(c=>c instanceof type))
    }

}