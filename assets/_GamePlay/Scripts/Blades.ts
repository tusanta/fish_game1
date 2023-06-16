import Character from "./Character";
import GameManager from "./GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Blades extends cc.Component {

    public static instance: Blades = null;

    protected onLoad(): void {
        Blades.instance = this;
    }

    @property(Character)
    private Parent_Blades: Character = null;
    
    // @property(cc.Node)
    // public Blades_1: cc.Node = null;
    // @property(cc.Node)
    // public Blades_2: cc.Node = null;
    // // @property(cc.Node)
    // // public Blades_3: cc.Node = null;

    // public onLevelUp(score: number) {
    //     if (score === 10) {
    //         console.log("==onlevelUp 10==");
    //         this.Blades_1.active = false;
    //         this.Blades_2.active = true;

    //     }

    // }


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if ((other.getComponent(Character) != this.Parent_Blades)) {
            other.getComponent(Character).onHit();
        }
    }

}
