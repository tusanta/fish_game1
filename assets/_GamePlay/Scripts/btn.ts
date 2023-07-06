
const { ccclass, property } = cc._decorator;
@ccclass
export default class btn extends cc.Component {

    public static instance: btn = null;
 
    protected onLoad(): void {
        btn.instance = this;
    }
    @property(cc.Animation)
    animation: cc.Animation = null;

    public btnDown() {
        this.animation.play("animation_down");
    }
    public btnUp() {
        this.animation.play("animation_up");
    }

  
  

}
