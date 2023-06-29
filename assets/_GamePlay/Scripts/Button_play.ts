
const {ccclass, property} = cc._decorator;
@ccclass
export default class Button_play extends cc.Component {

  @property(cc.Node)
  stick_demo: cc.Node = null;

protected onLoad(): void {
    cc.director.preloadScene("Save_sence");
    this.node.on("touchstart", () => {
      cc.director.loadScene("Save_sence");
      cc.director.resume();
      this.stick_demo.active = false;
    });
    

  }
  

   
}
