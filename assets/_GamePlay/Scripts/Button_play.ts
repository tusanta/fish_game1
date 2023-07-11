import Player from "./Player";
import up_speed from "./Up_speed";
import score from "./score";
const { ccclass, property } = cc._decorator;
@ccclass
export default class Button_play extends cc.Component {

  @property(cc.Node)
  button: cc.Node = null;
  @property(cc.Node)
  joystick: cc.Node = null;

  @property(cc.Animation)
  animation_effect: cc.Animation = null;

  protected onLoad(): void {
    cc.director.preloadScene("Save_sence");
    this.node.on("touchstart", () => {
      
      this.joystick.active = false;
      score.instance.onScore();
      up_speed.instance.node.active = true;
      Player.instance.node.active = true;
      this.button.active = false;
      this.animation_effect.play("effect_player");
      cc.director.resume();
    });


  }



}
