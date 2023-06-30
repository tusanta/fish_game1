import Character from "./Character";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Blades extends Character {

    public static instance: Blades = null;

    protected onLoad(): void {
        Blades.instance = this;
    }
    @property(Character)
    public Parent_Blades: Character = null;

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if ((other.getComponent(Character) != this.Parent_Blades)) {
          other.getComponent(Character).onHit();
        }
    }

}
