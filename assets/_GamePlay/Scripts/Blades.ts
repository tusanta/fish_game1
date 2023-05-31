
import Character from "./Character";
import Enemy_1 from "./Enemy_1";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Blades extends cc.Component {

    @property(Character)
    private parent: Character;

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if ((other.getComponent(Character) != this.parent)) {
          
            console.log("contact");
            other.getComponent(Character).onHit();
            this.parent.onLevelUp();
        }   
      }
    
}
