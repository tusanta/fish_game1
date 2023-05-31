import Joystick from "./joystick";
import food from "./food";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(Joystick)
    stick: Joystick = null;

    @property(cc.Node)
    food: cc.Node = null;


    @property(cc.Vec2)
    gravity: cc.Vec2 = cc.v2(0, 0);

     onLoad() {
        cc.director.getPhysicsManager().enabled = true;
      //   cc.director.getPhysicsManager().gravity = this.gravity

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

     }

}
