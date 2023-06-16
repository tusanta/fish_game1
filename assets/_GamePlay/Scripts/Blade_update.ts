
const {ccclass, property} = cc._decorator;

@ccclass
export default class Blades_update extends cc.Component {
    private static instance: Blades_update = null;


    @property(cc.Prefab)
    private prefab: cc.Prefab = null; 
    private pool: cc.NodePool = null

    onLoad(){
        Blades_update.instance = this;
        this.pool = new cc.NodePool();
    }
    public static getInstance(): Blades_update{
        return Blades_update.instance;
    }
    public getBlades_explosion(): cc.Node {
        let Blades_explosion = null;
        if(this.pool.size() > 0){
            Blades_explosion = this.pool.get();
        }else{
            Blades_explosion = cc.instantiate(this.prefab)
        }
        return Blades_explosion;
    }
    public putBlades_explosion(Blades_explosion: cc.Node){
        this.pool.put(Blades_explosion);
    }
}
