import ExplosionPool from "./ExplosionPool";
import FoodEnemy from "./FoodEnemy";
import score from "./score";

const { ccclass, property } = cc._decorator;
@ccclass
export default class Character extends cc.Component {

    public static instance: Character = null;
    public static getInstance(): Character {
        if (!Character.instance) {
            Character.instance = new Character();
        }
        return Character.instance;
    }
    protected onLoad(): void {
        Character.instance = this;
        
      }  
    @property(cc.Node)
    button: cc.Node = null;

    @property(cc.Animation)
    animation_button: cc.Animation = null;

    public onHit() {
        const explosionEnemy = ExplosionPool.getInstance().getExplosion();
        explosionEnemy.setPosition(this.node.position);
        explosionEnemy.setParent(this.node.parent);

        const food = FoodEnemy.getInstance().getEnemyFood();
        food.setPosition(this.node.position);
        food.setParent(this.node.parent);
        this.node.active = false;
    }

    public onHit_palyer() {
        const explosionEnemy = ExplosionPool.getInstance().getExplosion();
        explosionEnemy.setPosition(this.node.position);
        explosionEnemy.setParent(this.node.parent);
        score.instance.onDespawn();
        this.node.active = false;
        this.button.active = true;

        if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {         
            this.animation_button.play("Animation_reponsiveDown");
            

        } else {             
            this.animation_button.play("animation_down");
        }
    }

}
