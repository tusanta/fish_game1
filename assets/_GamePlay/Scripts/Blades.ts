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

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if ((other.getComponent(Character) != this.Parent_Blades)) {
            other.getComponent(Character).onHit();
        }
    }

}
