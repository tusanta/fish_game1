

const {ccclass, property} = cc._decorator;

@ccclass
export default class Button_play extends cc.Component {

  @property(cc.Vec3)
  public position: cc.Vec3 = cc.v3(0, 0 , 0);

protected onLoad(): void {
    cc.director.preloadScene("Save_sence");
    this.node.on("touchstart", () => {
      cc.director.loadScene("Save_sence");
      cc.director.resume();

    });
  }
  

   
}
