import Player from "./Player";
import up_speed from "./Up_speed";
import score from "./score";
import btn from "./btn";
import btn_2 from "./btn_2";
const { ccclass, property } = cc._decorator;
@ccclass
export default class Button_play extends cc.Component {

  @property(cc.Node)
  button: cc.Node = null;

  @property(cc.Node)
  button_2: cc.Node = null;


  @property(cc.Animation)
  animation_effect: cc.Animation = null;

  protected onLoad(): void {
    cc.director.preloadScene("Save_sence");
    this.node.on("touchstart", () => {
      score.instance.onScore();
      up_speed.instance.node.active = true;
      Player.instance.node.active = true;
      const deviceResolution = cc.view.getFrameSize();
      if (deviceResolution.width < deviceResolution.height) {
        if (this.button_2.active = true) {
          btn_2.instance.btnUp_reponsive();
        }
        this.button.active = false;
        btn.instance.btnUp();

      } else {
        if (this.button.active = true) {
          btn.instance.btnUp();
        }
        this.button_2.active = false;
        // btn_2.instance.btnUp_reponsive();
      }
      this.animation_effect.play("effect_player");
      cc.director.resume();
    });


  }



}
