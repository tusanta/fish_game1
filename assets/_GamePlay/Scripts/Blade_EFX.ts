import Blade_update from "./Blade_update";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Blade_EFX extends cc.Component {

 protected onLoad() {
    this.node.getComponent(cc.Animation).on('Despawn_Effect', this.Despawn_Effect, this);

 }
 public Despawn_Effect(event){
    Blade_update.getInstance().putBlades_explosion(this.node);
 }
}
