import Character from "./Character";
import GameManager from "./GameManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class food extends cc.Component {

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if(other.node.group == "Player"){
            this.node.active = false;
        }
        }
    }


