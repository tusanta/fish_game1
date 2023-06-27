
const { ccclass, property } = cc._decorator;
@ccclass
export default class makePlayer_1 extends cc.Component {


    protected onLoad(): void {
        cc.director.preloadScene("Save_sence");
        this.node.on("touchstart", () => {
            cc.director.loadScene("Save_sence");
        });

    }



}
