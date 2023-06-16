
const {ccclass, property} = cc._decorator;

@ccclass
export default class Level_pool extends cc.Component {
    private static instance: Level_pool = null;


    @property(cc.Prefab)
    private prefab: cc.Prefab = null;
    private pool: cc.NodePool = null

    onLoad(){
        Level_pool.instance = this;
        this.pool = new cc.NodePool();
    }
    public static getInstance(): Level_pool{
        return Level_pool.instance;
    }
    public getLevel(): cc.Node {
        let Level = null;
        if(this.pool.size() > 0){
            Level = this.pool.get();
        }else{
            Level = cc.instantiate(this.prefab)
        }
        return Level;
    }
    public putLevel(Level: cc.Node){
        this.pool.put(Level);
    }
}
