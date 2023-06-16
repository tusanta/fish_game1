import ExplosionPool from "./ExplosionPool";
import GameManager from "./GameManager";
import FoodEnemy from "./FoodEnemy";
import Blades from "./Blades";
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
   
    public onHit() {
        const explosionEnemy = ExplosionPool.getInstance().getExplosion();
        explosionEnemy.setPosition(this.node.position);
        explosionEnemy.setParent(this.node.parent);

        const food = FoodEnemy.getInstance().getEnemyFood();
        food.setPosition(this.node.position);
        food.setParent(this.node.parent);

        this.node.active = false;


    }

}
