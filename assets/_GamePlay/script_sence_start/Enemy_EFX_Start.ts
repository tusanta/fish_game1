import explosion_start from "./explosion_start";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy_EFX extends cc.Component {

 protected onLoad() {
    this.node.getComponent(cc.Animation).on('Despawn_Effect', this.Despawn_Effect, this);

 }
 public Despawn_Effect(event){
    explosion_start.getInstance().putExplosion(this.node);
 }
}
