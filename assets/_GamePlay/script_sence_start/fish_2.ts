import fish_1 from "./fish_1";

const { ccclass, property } = cc._decorator;

@ccclass
export default class fish_2 extends cc.Component {

    @property(fish_1)
    fish_1: fish_1 = null;

    protected update(dt: number): void {
        const distance = this.fish_1.node.position;
        const posX = distance.x

        if (posX >= 150) {
            this.node.setScale(-1, 1);
            console.log("==set_scale");

        }
    }


}
