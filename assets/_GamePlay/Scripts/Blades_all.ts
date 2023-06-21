import Blades_update from "./Blade_update";
import Level_pool from "./Level_pool";
import joystick from "./joystick";
const { ccclass, property } = cc._decorator;
@ccclass
export default class Blades extends cc.Component {

    public static instance: Blades = null;

    protected onLoad() {
        Blades.instance = this;

    }

    @property(cc.Node)
    private Blades_1: cc.Node = null;
    @property(cc.Node)
    private Blades_2: cc.Node = null;
    @property(cc.Node)
    private Blades_3: cc.Node = null;
    @property(cc.Node)
    public Blades_4: cc.Node = null;
    @property(cc.Node)
    public Blades_5: cc.Node = null;

    @property(joystick)
    joystick: joystick = null;

    public onLevelUp(score: number) {
        if (score === 5) {
            console.log("==onlevelUp 5==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.node.position);
            explosionBlades.setParent(this.node.parent);

            const level_up = Level_pool.getInstance().getLevel();
            level_up.setParent(this.joystick.node.parent);

            this.Blades_1.active = false;
            this.Blades_2.active = true;

        } else if (score === 10) {
            console.log("==onlevelUp 10==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.node.position);
            explosionBlades.setParent(this.node.parent);

            const level_up = Level_pool.getInstance().getLevel();
            level_up.setParent(this.joystick.node.parent);

            this.Blades_2.active = false;
            this.Blades_3.active = true;
        } else if (score === 15) {
            console.log("==onlevelUp 15==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.node.position);
            explosionBlades.setParent(this.node.parent);

            const level_up = Level_pool.getInstance().getLevel();
            level_up.setParent(this.joystick.node.parent);

            this.Blades_3.active = false;
            this.Blades_4.active = true;

        } else if (score === 20) {
            console.log("==onlevelUp 20==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.node.position);
            explosionBlades.setParent(this.node.parent);

            const level_up = Level_pool.getInstance().getLevel();
            level_up.setParent(this.joystick.node.parent);

            this.Blades_4.active = false;
            this.Blades_5.active = true;

        }
    }
}
