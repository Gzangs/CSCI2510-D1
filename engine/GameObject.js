class GameObject{
    components = []
    markForDestroy = false
    name
    tags = []

    get transform(){
        return this.components[0];
    }

    constructor(name, tags = []){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this //put the instance of me into gameObject
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
        for(const component of this.components){
            component.draw?.(ctx)
        }
    }

    destroy(){
        this.markForDestroy = true
    }

    getComponent(type){
        return this.components.find(c=>c instanceof type) //return the first component that matches the type of something
    }

    static find(name){
        return SceneManager.currentScene.gameObjects.find(go=>go.name == name)
        //return Engine.currentScene.gameObjects.find(function(go){return go.name == name))
    }

    static findGameObjectsWithTag(tag){
        return SceneManager.currentScene.gameObjects.filter(go=>go.tags.includes(tag))
    }

}