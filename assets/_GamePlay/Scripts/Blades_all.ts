import Character from "./Character";
import GameManager from "./GameManager";
import Blades_update from "./Blade_update";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Blades extends cc.Component {

    public static instance: Blades = null;

    protected onLoad(): void {
        Blades.instance = this;
    }

    @property(Character)
    private Parent_Blades: Character = null;

    @property(cc.Node)
    public Blades_1: cc.Node = null;
    @property(cc.Node)
    public Blades_2: cc.Node = null;
    @property(cc.Node)
    public Blades_3: cc.Node = null;
    @property(cc.Node)
    public Blades_4: cc.Node = null;
    @property(cc.Node)
    public Blades_5: cc.Node = null;

    public onLevelUp(score: number) {
        if (score === 5) {
            console.log("==onlevelUp 5==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.Blades_1.position);
            explosionBlades.setParent(this.node.parent);
            this.Blades_1.active = false;
            this.Blades_2.active = true;
        } else if (score === 10) {
            console.log("==onlevelUp 10==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.Blades_2.position);
            explosionBlades.setParent(this.node.parent);
            this.Blades_2.active = false;
            this.Blades_3.active = true;
        }else if(score === 15){
            console.log("==onlevelUp 15==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.Blades_2.position);
            explosionBlades.setParent(this.node.parent);
            this.Blades_3.active = false;
            this.Blades_4.active = true;

        }else if(score === 20){
            console.log("==onlevelUp 20==");
            const explosionBlades = Blades_update.getInstance().getBlades_explosion();
            explosionBlades.setPosition(this.Blades_2.position);
            explosionBlades.setParent(this.node.parent);
            this.Blades_4.active = false;
            this.Blades_5.active = true;

        }

    }


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if ((other.getComponent(Character) != this.Parent_Blades)) {
            other.getComponent(Character).onHit();
        }
    }

}
