
const { ccclass, property } = cc._decorator;
@ccclass
export default class btn_2 extends cc.Component {

    public static instance: btn_2 = null;

    protected onLoad(): void {
        btn_2.instance = this;
    }

    @property(cc.Animation)
    animation: cc.Animation = null;

    public btnDown_reponsive(){
        this.animation.play("Animation_reponsiveDown");
    }

    public btnUp_reponsive(){
        this.animation.play("Animation_reponsiveUp");
    }

 
  
    

}
