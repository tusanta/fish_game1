const { ccclass, property } = cc._decorator;

@ccclass
export default class food_enemy_start extends cc.Component {
    private static instance: food_enemy_start = null;

    @property(cc.Prefab)
    private prefab: cc.Prefab = null;
    private pool: cc.NodePool = null;

    onLoad() {
        food_enemy_start.instance = this;
        this.pool = new cc.NodePool();
    }
    public static getInstance(): food_enemy_start {
        return food_enemy_start.instance;
    }
    public getEnemyFood(): cc.Node {
        let EnemyFood = null;
        if (this.pool.size() > 0) {
            EnemyFood = this.pool.get();
        } else {
            EnemyFood = cc.instantiate(this.prefab)
        }
        return EnemyFood;
    }
    public putEnemyFood(EnemyFood: cc.Node) {
        this.pool.put(EnemyFood);
    }
 
    
}
