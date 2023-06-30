
import Character from "./Character";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Blades_Enemy extends Character {

    @property(Character)
    public Parent_Blades_Enemy: Character = null;

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if ((other.getComponent(Character) != this.Parent_Blades_Enemy && other.node.group != "Enemy")) {
            other.getComponent(Character).onHit_palyer();

        }
    }

}
