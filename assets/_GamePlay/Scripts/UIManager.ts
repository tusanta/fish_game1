import score from "./score";
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {

    @property(cc.Node)
    speedUp: cc.Node = null;
    private horizontal: number = 0;


    @property(cc.Node)
    button: cc.Node = null;

    @property(cc.Animation)
    animation_button: cc.Animation = null;
    @property(cc.Node)
    fish_string: cc.Node = null;
    @property(cc.Node)
    image: cc.Node = null;
    @property(cc.Node)
    button_all: cc.Node = null;
    @property(cc.Node)
    hand: cc.Node = null;

    @property(cc.Node)
    string_upspeed: cc.Node = null;

    @property(cc.Node)
    joyStick_Start: cc.Node = null;

    @property(cc.Node)
    fish_string_nextlv: cc.Node = null;
    @property(cc.Node)
    image_nextlv: cc.Node = null;
    @property(cc.Node)
    button_nexlv: cc.Node = null;

    @property(cc.Node)
    nextLevel: cc.Node = null;

    @property(cc.Node)
    node_neo_1: cc.Node = null;

    @property(cc.Node)
    node_neo_2: cc.Node = null;

    protected lateUpdate(dt: number): void {
        this.changeRotation(cc.view.getFrameSize().width > cc.view.getFrameSize().height ? 1 : -1);

        // if(cc.view.getVisibleSize() < cc.size(740,745)){
        // }


    }

    public changeRotation(horizontal: number) {

        if (this.horizontal != horizontal) {
            this.horizontal = horizontal;

            //xoay ngang
            if (this.horizontal == 1) {
                score.instance.node.setPosition(0, 220);
                this.node_neo_1.active = true;
                this.node_neo_2.active = false;

                this.speedUp.setPosition(400, 0);
                this.hand.setPosition(330, 80);
                this.hand.setRotation(0)
                this.string_upspeed.setPosition(0, -200);
                this.joyStick_Start.setPosition(-250, 40)

                if (this.button.active == true) {
                    this.scheduleOnce(() => {
                        this.fish_string.setPosition(-170, -1150);
                        this.image.setPosition(-170, -950);
                        this.button_all.setPosition(150, -1050);
                    }, 0.01);
                }

                if (this.nextLevel.active == true) {
                    this.scheduleOnce(() => {
                        this.fish_string_nextlv.setPosition(-170, -1150);
                        this.image_nextlv.setPosition(-170, -950);
                        this.button_nexlv.setPosition(150, -1050);
                    }, 0.01)
                }
            }
            //xoay doc
            else if (this.horizontal == -1) {
                score.instance.node.setPosition(0, 480);
                this.node_neo_2.active = true;
                this.node_neo_1.active = false;


                this.speedUp.setPosition(250, -500);
                this.hand.setPosition(320, -580);
                this.hand.setRotation(190)
                this.string_upspeed.setPosition(0, -600);
                this.joyStick_Start.setPosition(-150, -450)

                if (this.button.active == true) {
                    this.scheduleOnce(() => {
                        this.fish_string.setPosition(0, -1150);
                        this.image.setPosition(0, -950);
                        this.button_all.setPosition(0, -1300);
                    }, 0.01);
                }

                if (this.nextLevel.active == true) {
                    this.scheduleOnce(() => {
                        this.fish_string_nextlv.setPosition(0, -1150);
                        this.image_nextlv.setPosition(0, -950);
                        this.button_nexlv.setPosition(0, -1300);
                    }, 0.01);
                }
            }

        }
    }

}
