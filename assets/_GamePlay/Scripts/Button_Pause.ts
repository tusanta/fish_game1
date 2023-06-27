

const {ccclass, property} = cc._decorator;

@ccclass
export default class Button_Pause extends cc.Component {

    private isPaused: boolean = false;

    protected onLoad(): void {

        this.node.on(cc.Node.EventType.TOUCH_START, this.on_click_Start, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.on_click_End, this);

    }

    public on_click_Start(event: cc.Event.EventTouch): void {
        const label = this.node.getComponentInChildren(cc.Label);

        if (!this.isPaused) {
            cc.director.pause();
            this.isPaused = true;
            label.string = "RESUME";
            this.node.setScale(cc.v2(0.8, 0.8));
    

        } else {
            cc.director.resume();
            this.isPaused = false;
            label.string = "PAUSE";
            this.node.setScale(cc.v2(0.8, 0.8));
        }
    }

    private on_click_End(event: cc.Event.EventTouch): void {
        this.node.setScale(cc.v2(1, 1));

    }

    
}
