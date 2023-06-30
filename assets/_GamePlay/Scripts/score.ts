
const { ccclass, property } = cc._decorator;

@ccclass
export default class score extends cc.Component {
    public static instance: score = null;

    protected onLoad() {
        score.instance = this;
    }
    public onDespawn() {
        this.node.active = false;

    }
    public onScore() {
        this.node.active = true;
    }




}
