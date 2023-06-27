
const { ccclass, property } = cc._decorator;

@ccclass
export default class cameraControl extends cc.Component {

  @property(cc.Node)
  Player_Node: cc.Node = null;


  protected update(dt) {
    const tangent_position = this.Player_Node.getPosition();
    tangent_position.x = cc.misc.clampf(tangent_position.x, 1500, -1500);

    tangent_position.y = cc.misc.clampf(tangent_position.y, 700, -470);

    const current_position = this.node.getPosition();
    current_position.lerp(tangent_position, 0.1, current_position);
    this.node.setPosition(current_position);
    ///

   


  }

}





