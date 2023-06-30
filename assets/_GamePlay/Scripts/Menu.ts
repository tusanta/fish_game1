const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
    public static instance: Menu = null;


    private isPaused: boolean = false;

    @property(cc.Node)
    public button: cc.Node = null;

    @property(cc.Animation)
    animation_img: cc.Animation = null;


    protected onLoad(): void {
        Menu.instance = this;

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
            this.animation_img.play("animation_down");

        } else {
            cc.director.resume();
            this.isPaused = false;
            label.string = "MENU";
            this.node.setScale(cc.v2(0.8, 0.8));
            this.animation_img.play("animation_up");

        }
    }
    private on_click_End(event: cc.Event.EventTouch): void {
        this.node.setScale(cc.v2(1, 1));

    }
}
