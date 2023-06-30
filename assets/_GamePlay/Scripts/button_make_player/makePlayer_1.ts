
const { ccclass, property } = cc._decorator;
@ccclass
export default class makePlayer_1 extends cc.Component {
    public static instance : makePlayer_1 = null;
    public static getInstance(): makePlayer_1 {
        if (!makePlayer_1.instance) {
            makePlayer_1.instance = new makePlayer_1();
        }
        return makePlayer_1.instance;
    }

    @property
    public isBoolean : Boolean = false;

    protected onLoad(): void {
        makePlayer_1.instance = this;
        cc.director.preloadScene("Save_sence");
        this.node.on("touchstart", () => {
            cc.director.loadScene("Save_sence");
            this.isBoolean = true;
        });

    }



}
