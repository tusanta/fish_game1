import ExplosionPool from "./ExplosionPool";
import FoodEnemy from "./FoodEnemy";
import score from "./score";
import btn from "./btn"


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
    @property(cc.Node)
    button: cc.Node = null;

    @property(btn)
    btn: btn = null;
    @property(cc.Animation)
    animation: cc.Animation = null;


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
        btn.instance.btnDown();

    }

}
