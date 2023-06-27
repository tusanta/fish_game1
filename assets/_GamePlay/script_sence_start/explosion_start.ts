
const {ccclass, property} = cc._decorator;

@ccclass
export default class explosion_start extends cc.Component {
    private static instance: explosion_start = null;


    @property(cc.Prefab)
    private prefab: cc.Prefab = null;
    private pool: cc.NodePool = null

    onLoad(){
        explosion_start.instance = this;
        this.pool = new cc.NodePool();
    }
    public static getInstance(): explosion_start{
        return explosion_start.instance;
    }
    public getExplosion(): cc.Node {
        let explosion = null;
        if(this.pool.size() > 0){
            explosion = this.pool.get();
        }else{
            explosion = cc.instantiate(this.prefab)
        }
        return explosion;
    }
    public putExplosion(explosion: cc.Node){
        this.pool.put(explosion);
    }
}
