import Joystick from "./joystick";
import food from "./food";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {


 private static instance: GameManager = null;
 private prefabReady: boolean = false;

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    @property(Joystick)
    stick: Joystick = null;

    @property(cc.Node)
    food: cc.Node = null;

    @property(cc.Vec2)
    gravity: cc.Vec2 = cc.v2(0, 0);


    
    public isPrefabReady(): boolean { //tạo biến sẵn sàng xuất hiện cho prefab (true & false)
      return this.prefabReady;
  }

  public setPrefabReady(ready: boolean) { //dặt trạng thái cho biển: true = xuất hiện, false = ẩn.
      this.prefabReady = ready;
  }

     onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().gravity = this.gravity
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

     }

}
