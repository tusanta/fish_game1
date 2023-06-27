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
        
        this.moveDown();
        this.moveTo(this.button, new cc.Vec3(0, 0, 0), 0.2);

    }

    public moveTo(node: cc.Node, targetPosition: cc.Vec3, duration: number): void {
        cc.tween(node)
            .to(duration, { position: new cc.Vec3(targetPosition.x, targetPosition.y, targetPosition.z) }, {
                easing: "linear",
            })
            .call(() => {
            })
            .start();
    }


    public moveDown() {
        if (this.button.position === new cc.Vec3(0, 0, 0)) {
            btn.instance.btnDown();
        }
    }
}
