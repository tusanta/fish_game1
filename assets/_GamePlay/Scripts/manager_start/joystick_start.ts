import Player from "../Player";

const {ccclass, property} = cc._decorator;
@ccclass
export default class joystick_start extends cc.Component {

    public onDespawn_stick() {
        this.node.active = false;
    }
    protected update(dt: number): void {
        if (Player.getInstance().node.active == false) {
            this.onDespawn_stick();
        }
    }
}
