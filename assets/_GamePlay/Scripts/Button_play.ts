import Player from "./Player";
import up_speed from "./Up_speed";
import score from "./score";
import speed_start from "./manager_start/speed_start";
const { ccclass, property } = cc._decorator;
@ccclass
export default class Button_play extends cc.Component {

  @property(cc.Animation)
  animation_btn: cc.Animation = null;

  @property(cc.Animation)
  animation_effect: cc.Animation = null;

  protected onLoad(): void {
    cc.director.preloadScene("Save_sence");
    this.node.on("touchstart", () => {
      score.instance.onScore();
      up_speed.instance.node.active = true;
      Player.instance.node.active = true;
      this.animation_btn.play("animation_up");
      this.animation_effect.play("effect_player");
      cc.director.resume();
    });


  }



}
