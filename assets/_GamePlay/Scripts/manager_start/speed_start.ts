import Player from "../Player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class speed_start extends cc.Component {

    @property(cc.Node)
    joystick_demo: cc.Node = null;


    public onDespawn_speed() {
        this.node.active = false;
    }
    protected update(dt: number): void {
        if(this.joystick_demo.active == false){
            this.node.active = true;
        }
        if (Player.getInstance().node.active == false) {
            this.onDespawn_speed();
        }
    }
}
