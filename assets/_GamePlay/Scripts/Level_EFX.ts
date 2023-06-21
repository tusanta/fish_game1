import Level_pool from "./Level_pool";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Level_EFX extends cc.Component {

    protected onLoad() {
        this.node.getComponent(cc.Animation).on('Despawn_Effect', this.Despawn_Effect, this);
    }
    public Despawn_Effect(event) {
        Level_pool.getInstance().putLevel(this.node);
    }


}
