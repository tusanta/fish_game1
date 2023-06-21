const { ccclass, property } = cc._decorator;

@ccclass
export default class FoodEnemy extends cc.Component {
    private static instance: FoodEnemy = null;

    @property(cc.Prefab)
    private prefab: cc.Prefab = null;
    private pool: cc.NodePool = null;

    onLoad() {
        FoodEnemy.instance = this;
        this.pool = new cc.NodePool();
    }
    public static getInstance(): FoodEnemy {
        return FoodEnemy.instance;
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
