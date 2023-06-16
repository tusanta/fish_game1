import Character from "./Character";
import GameManager from "./GameManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Food extends cc.Component {

    @property(GameManager)
    private gameManager: GameManager = null;

   

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group == "Player") {
            this.node.active = false;
            GameManager.instance.gainScore();
        }
    }
}


