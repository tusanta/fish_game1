import ExplosionPool from "./ExplosionPool";
import GameManager from "./GameManager";
import FoodEnemy from "./FoodEnemy";
const { ccclass, property } = cc._decorator;
@ccclass
export default class Character extends cc.Component {

    // public onLevelUp() {
    //     ///
    // }

    public onHit() {

        // if (!GameManager.getInstance().isPrefabReady()) {
        //     return; // Nếu prefab chưa sẵn sàng => không làm gì cả(không cho prefab xuất hiện ngay khi run)
        // }

        const explosionEnemy = ExplosionPool.getInstance().getExplosion();
        explosionEnemy.setPosition(this.node.position);
        explosionEnemy.setParent(this.node.parent);

        const food = FoodEnemy.getInstance().getEnemyFood();
        food.setPosition(this.node.position);
        food.setParent(this.node.parent);

        this.node.active = false;


    }

}
