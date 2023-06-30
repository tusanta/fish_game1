import Player from "../Player";

const {ccclass, property} = cc._decorator;
@ccclass
export default class joystick_start extends cc.Component {
    public static instance: joystick_start = null;

    protected onLoad(): void {
        joystick_start.instance = this;
    }

    public onDespawn_stick() {
        this.node.active = true;
    }
    protected update(dt: number): void {
        if (Player.getInstance().node.active == false) {
            this.node.active = false;
        }
       
    }
}
