import Menu from "./Menu";
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
 
    protected lateUpdate(dt: number): void {
        this.changeRotation(cc.view.getFrameSize().width > cc.view.getFrameSize().height ? 1 : -1);  

        // if(cc.winSize <= cc.size(750,750)){
            
        //     console.log("===");
        // }
    }

    public changeRotation(horizontal: number) {

        if (this.horizontal != horizontal) {
            this.horizontal = horizontal;

            //xoay ngang
            if (this.horizontal == 1) {
                score.instance.node.setPosition(0,220);
                Menu.instance.node.setPosition(cc.view.getFrameSize().width / 1.7 , cc.view.getFrameSize().height / 1.8);
                this.speedUp.setPosition(350 , 0);
                this.hand.setPosition(280, 80);
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
                score.instance.node.setPosition(0,480);
                Menu.instance.node.setPosition(cc.view.getFrameSize().width / 1.3 , cc.view.getFrameSize().height/ 1.2);
                this.speedUp.setPosition(300 , -550);
                this.hand.setPosition(220, -470); 
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
