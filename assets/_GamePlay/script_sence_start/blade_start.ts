
import food_enemy_start from "./food_enemy_start";
import explosion_start from "./explosion_start";
const { ccclass, property } = cc._decorator;

@ccclass
export default class baldes_start extends cc.Component {

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group != "Enemy") {
            const explosionEnemy = explosion_start.getInstance().getExplosion();
            explosionEnemy.setPosition(other.node.position);
            explosionEnemy.setParent(other.node.parent);

            const food = food_enemy_start.getInstance().getEnemyFood();
            food.setPosition(other.node.position);
            food.setParent(other.node.parent);
            other.node.active = false;

        }
    }

}
