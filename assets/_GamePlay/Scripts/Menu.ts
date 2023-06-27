import btn from "./btn";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {

    private isPaused: boolean = false;

    @property(cc.Node)
    public button: cc.Node = null;


    protected onLoad(): void {
      
        this.node.on(cc.Node.EventType.TOUCH_START, this.on_click_Start, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.on_click_End, this);

    }

    public on_click_Start(event: cc.Event.EventTouch): void {
        const label = this.node.getComponentInChildren(cc.Label);

        if (!this.isPaused) {
            this.isPaused = true;
            label.string = "RESUME";
            this.node.setScale(cc.v2(0.8, 0.8));
            this.button.active = true;
            this.moveTo(this.button, new cc.Vec3(0, 0, 0), 0.2);
            btn.instance.btnDown();


        } else {
            cc.director.resume();
            this.isPaused = false;
            label.string = "MENU";
            this.node.setScale(cc.v2(0.8, 0.8));
            this.moveTo(this.button, new cc.Vec3(0, 1100, 0), 0.5);
        }
    }
    public moveTo(button: cc.Node, targetPosition: cc.Vec3, duration: number): void {
        cc.tween(button)
            .to(duration, { position: new cc.Vec3(targetPosition.x, targetPosition.y, targetPosition.z) }, {
                easing: "linear",
            })
            .call(() => {
            })
            .start();
    }

    private on_click_End(event: cc.Event.EventTouch): void {
        this.node.setScale(cc.v2(1, 1));

    }
}
