

const {ccclass, property} = cc._decorator;

@ccclass
export default class Button_play extends cc.Component {

protected onLoad(): void {
    cc.director.preloadScene("Save_sence");
    this.node.on("touchstart", () => {
      cc.director.loadScene("start_game");
      cc.director.resume();

    });
  }
  

   
}
