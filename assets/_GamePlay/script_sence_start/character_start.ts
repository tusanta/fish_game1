
import food_enemy_start from "./food_enemy_start";
import explosion_start from "./explosion_start";
const { ccclass, property } = cc._decorator;
@ccclass
export default class character_start extends cc.Component {

    public static instance: character_start = null;
    public static getInstance(): character_start {
        if (!character_start.instance) {
            character_start.instance = new character_start();
        }
        return character_start.instance;
    }

    public onHit() {
        const explosionEnemy = explosion_start.getInstance().getExplosion();
        explosionEnemy.setPosition(this.node.position);
        explosionEnemy.setParent(this.node.parent);

        const food = food_enemy_start.getInstance().getEnemyFood();
        food.setPosition(this.node.position);
        food.setParent(this.node.parent);
        this.node.active = false;
    }

 

}
