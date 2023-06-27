
const { ccclass, property } = cc._decorator;

@ccclass
export default class fish_1 extends cc.Component {

   protected onLoad(): void {
    this.moveTo(this.node, new cc.Vec3(0, 50, 0), 3);

   }
   public moveTo(fish_1: cc.Node, targetPosition: cc.Vec3, duration: number): void {
    cc.tween(fish_1)
        .to(duration, { position: new cc.Vec3(targetPosition.x, targetPosition.y, targetPosition.z) }, {
            easing: "linear",
        })
        .call(() => {
        })
        .start();
}
}
