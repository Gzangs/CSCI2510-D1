class EnemyController extends Component{
    direction = 1
    update(){
        this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > 700){
            this.direction = -1
        }
        if(this.transform.position.x < 500){
            this.direction = 1
        }
        if(this.gameObject.getComponent(Health).health <= 0){
            instantiate(new ItemGameObject(), this.transform.position.clone()) //make this random chance maybe
            this.gameObject.destroy()
            Globals.points += 100 //100 points when defeat enemy
        }
    }
}