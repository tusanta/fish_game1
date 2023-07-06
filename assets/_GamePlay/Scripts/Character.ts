import ExplosionPool from "./ExplosionPool";
import FoodEnemy from "./FoodEnemy";
import score from "./score";
import btn from "./btn"
import btn_2 from "./btn_2";

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

    @property(cc.Node)
    button_2: cc.Node = null;

    @property(btn)
    btn: btn = null;

    @property(btn_2)
    btn_2: btn_2 = null;

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

        const deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.button_2.active = true;
            this.button.active = false;
            btn_2.instance.btnDown_reponsive();


        } else {
            this.button_2.active = false;
            this.button.active = true;    
            btn.instance.btnDown();
        }
    }

}
