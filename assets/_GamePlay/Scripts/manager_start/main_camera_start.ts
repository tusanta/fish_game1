
const { ccclass, property } = cc._decorator;

@ccclass
export default class main_camera_start extends cc.Component {
  public static instance: main_camera_start = null;

  protected onLoad(): void {
    main_camera_start.instance = this;
  }
  

  @property(cc.Canvas)
  canvas: cc.Canvas = null;

  protected update(dt) {
    this.makeReponsive();
  }

  public makeReponsive(){
    const deviceResolution = cc.view.getFrameSize();

    if (deviceResolution.width < deviceResolution.height) {
      this.canvas.fitHeight = true;
      this.canvas.fitWidth = false;
      cc.find("Canvas/Main Camera").getComponent(cc.Camera).zoomRatio = 1;

    } else {
      this.canvas.fitHeight = false;
      this.canvas.fitWidth = true;
      cc.find("Canvas/Main Camera").getComponent(cc.Camera).zoomRatio = 1.5;

    }

  }

}


