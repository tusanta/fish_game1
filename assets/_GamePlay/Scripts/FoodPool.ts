
const {ccclass, property} = cc._decorator;

@ccclass
export default class FoodPool extends cc.Component {

    @property(cc.Prefab)
    private prefab: cc.Prefab = null;
    private pool: cc.NodePool = null


}
