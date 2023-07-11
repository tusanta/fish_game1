

const { ccclass, property } = cc._decorator;

@ccclass
export default class cameraControl extends cc.Component {
  @property(cc.Canvas)
  canvas: cc.Canvas = null;

  @property(cc.Node)
  playerNode: cc.Node = null;
  
  @property(cc.Node)
  cameraNode: cc.Node = null;

  @property(cc.Node)
  menu_button: cc.Node = null;

  protected onLoad(): void {
    window.onresize = this.onWindowResize.bind(this);
  }

  protected onDestroy() {
    window.onresize = null;
  }

  protected update(dt: number): void {
    this.onWindowResize();

  }

  protected onWindowResize() {
    
    const initialDesignWidth = 1920; // Kích thước thiết kế ban đầu của trò chơi
    const initialDesignHeight = 1080;

    const currentWindowWidth = window.innerWidth;
    const currentWindowHeight = window.innerHeight;

    const scaleX =  initialDesignWidth / currentWindowWidth;
    const scaleY =  initialDesignHeight /  currentWindowHeight;

    // // Cập nhật kích thước thiết kế của trò chơi

    cc.view.setDesignResolutionSize(
      initialDesignWidth / scaleX,
      initialDesignHeight / scaleY,
      cc.ResolutionPolicy.SHOW_ALL
    );

    this.makeResponsive();
  }

  protected makeResponsive() {  
    const deviceResolution = cc.view.getFrameSize();
    if (deviceResolution.width < deviceResolution.height) {
      // Các thay đổi cho chế độ dọc
      this.canvas.fitHeight = true;
      this.canvas.fitWidth = false;
      this.cameraNode.getComponent(cc.Camera).zoomRatio = 2;
      
      const tangent_position = this.playerNode.getPosition();
      tangent_position.x = cc.misc.clampf(tangent_position.x, 1550, -1550);
      tangent_position.y = cc.misc.clampf(tangent_position.y, 290, -290);

      const current_position = this.node.getPosition();
      current_position.lerp(tangent_position, 0.1, current_position);
      this.node.setPosition(current_position);
      

    } else {
      // Các thay đổi cho chế độ ngang
      this.canvas.fitHeight = false;
      this.canvas.fitWidth = true;
      this.cameraNode.getComponent(cc.Camera).zoomRatio = 1.5;

      const tangent_position = this.playerNode.getPosition();
      tangent_position.x = cc.misc.clampf(tangent_position.x, 1500, -1500);
      tangent_position.y = cc.misc.clampf(tangent_position.y, 750, -750);

      const current_position = this.node.getPosition();
      current_position.lerp(tangent_position, 0.1, current_position);
      this.node.setPosition(current_position);
   
    }
  }
}












