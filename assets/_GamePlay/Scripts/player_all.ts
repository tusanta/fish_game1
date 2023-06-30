
import makePlayer_1 from "./button_make_player/makePlayer_1";
import makePlayer_2 from "./button_make_player/makePlayer_2";
import makePlayer_3 from "./button_make_player/makePlayer_3";
import joystick_start from "./manager_start/joystick_start";
const { ccclass, property } = cc._decorator;

@ccclass
export default class player_all extends cc.Component {
    public static instance: player_all = null;

    @property(cc.Node)
    joystick_start: cc.Node = null;

    protected onLoad() {
        player_all.instance = this;
        if(makePlayer_1.getInstance().isBoolean == true){
            this.joystick_start.active = true;
        }

        if (makePlayer_2.getInstance().isBoolean == true) {
            this.getRunPlayer_1();
            this.joystick_start.active = true;

            console.log("==1==");
        }
        if (makePlayer_3.getInstance().isBoolean_2 == true) {
            this.getRunPlayer_2();
            console.log("==2==");
            this.joystick_start.active = true;

        }
    }

    @property(cc.Node)
    player: cc.Node = null;
    @property(cc.Node)
    player_2: cc.Node = null;
    @property(cc.Node)
    player_3: cc.Node = null;

    public getRunPlayer_1() {
        this.player.active = false;
        this.player_2.active = true;

    }
    public getRunPlayer_2() {
        this.player.active = false;
        this.player_3.active = true;


    }


}
