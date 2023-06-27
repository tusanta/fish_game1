import fish_1 from "./fish_1";


const { ccclass, property } = cc._decorator;

@ccclass
export default class fish_2 extends cc.Component {
    public static instance: fish_2 = null;
    protected onLoad(): void {
        fish_2.instance = this;
    }

    @property(fish_1)
    fish_1: fish_1 = null;
    @property
    private timer: number = 0;
    private delay: number = 2;

    @property(cc.Node)
    Effect_light: cc.Node = null;

    @property(cc.Node)
    menuPlayer: cc.Node = null;

    @property(cc.Node)
    fish_make: cc.Node = null;

    @property(cc.Node)
    player_want: cc.Node = null;

    protected update(dt: number): void {
        const distance = this.fish_1.node.position;
        const posX = distance.x
        if (posX >= 0) {
            this.node.setScale(-1, 1);
        }

        if (this.fish_1.node.active == false) {
            this.timer += dt;
            if (this.timer >= this.delay) {
                this.node.active = false;
                this.scheduleOnce(() => {  /// hàm scheduleOnce(()=>{ "thực hiện gì" }, trong vòng bao nhiêu giây) // gọi hàm callback trong khoảng bao nhiêu giây
                    this.Effect_light.active = true;
                }, 0);
                this.scheduleOnce(() => {
                    this.fish_make.active = true;
                }, 0.5);
                this.scheduleOnce(() => {
                    this.player_want.active = true;
                }, 1);
                this.scheduleOnce(() => {
                    this.menuPlayer.active = true;
                }, 2);
        }
        
    }
}
}







