
import Player from "./Player";
const { ccclass, property } = cc._decorator;

@ccclass
export default class up_speed extends cc.Component {
    static instance: up_speed = null;


    @property
    speed: number = 0;
    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null;

    @property(cc.Node)
    string: cc.Node = null;
    @property
    private speedCount: number = 0;
    private readonly maxSpeedCount: number = 5;

    protected onLoad() {
        up_speed.instance = this;

        this.node.on(cc.Node.EventType.TOUCH_START, this.on_click_start, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.on_click_end, this);

    }

    public on_click_start(event: Touch) {
        this.hand.active = false
        this.string.active = false;

        if (this.speedCount >= this.maxSpeedCount) {
            return;
        }
        this.speed += 100;
        const speedUpdate = Player.getInstance().getPlayerSpeed();
        const speedReturn = speedUpdate + this.speed;
        this.node.setScale(cc.v2(0.8, 0.8));
        this.speedCount++;
        return speedReturn;
    }

    public on_click_end(event: Touch) {
        this.node.setScale(cc.v2(1, 1));

    }

    public onDespawn_speed() {
        this.node.active = false;
    }
    protected update(dt: number): void {
        if (Player.getInstance().node.active == false) {
            this.onDespawn_speed();
        }

  
    }

    }


