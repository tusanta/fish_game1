import btn from "./btn";
import btn_2 from "./btn_2";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
    public static instance: Menu = null;


    private isPaused: boolean = false;

    @property(cc.Node)
    public button: cc.Node = null;

    @property(cc.Node)
    public button_2: cc.Node = null;


    protected onLoad(): void {
        Menu.instance = this;

        this.node.on(cc.Node.EventType.TOUCH_START, this.on_click_Start, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.on_click_End, this);

    }

    public on_click_Start(event: cc.Event.EventTouch): void {
        const label = this.node.getComponentInChildren(cc.Label);
        const deviceResolution = cc.view.getFrameSize();


        if (!this.isPaused) {
            this.isPaused = true;
            label.string = "RESUME";
            this.node.setScale(cc.v2(0.8, 0.8));
            if (deviceResolution.width < deviceResolution.height) {
                this.button_2.active = true;
                btn_2.instance.btnDown_reponsive();

            } else {
                this.button.active = true;
                btn.instance.btnDown();
            }

        } else {
            cc.director.resume();
            this.isPaused = false;
            label.string = "MENU";
            this.node.setScale(cc.v2(0.8, 0.8));
            if (deviceResolution.width < deviceResolution.height) {
                this.button_2.active = true;
                this.button.active = false;
                btn_2.instance.btnUp_reponsive();

            } else {
                this.button.active = true;
                this.button_2.active = false;

                btn.instance.btnUp();
            }

        }
    }
    private on_click_End(event: cc.Event.EventTouch): void {
        this.node.setScale(cc.v2(1, 1));

    }
}
