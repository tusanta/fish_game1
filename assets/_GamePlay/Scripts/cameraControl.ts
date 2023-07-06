
// const { ccclass, property } = cc._decorator;

// @ccclass
// export default class cameraControl extends cc.Component {
//   public static instance: cameraControl = null;

//   protected onLoad(): void {
//     cameraControl.instance = this;
//     window.onresize = this.onWindowResize.bind(this);

//   }

//   @property(cc.Node)
//   Player_Node: cc.Node = null;

//   @property(cc.Canvas)
//   canvas: cc.Canvas = null;

//   @property(cc.Node)
//   button:cc.Node = null;

//   @property(cc.Node)
//   button_2: cc.Node = null;

//   protected update(dt) {
//     this.makeReponsive();


//   }
//   public makeReponsive(){
//     const deviceResolution = cc.view.getFrameSize();
//     if (deviceResolution.width < deviceResolution.height) {
//       this.canvas.fitHeight = true;
//       this.canvas.fitWidth = false;
//       cc.find("Canvas/Main Camera").getComponent(cc.Camera).zoomRatio = 1;
//       const tangent_position = this.Player_Node.getPosition();
//       tangent_position.x = cc.misc.clampf(tangent_position.x, 1500, -1500);
//       tangent_position.y = cc.misc.clampf(tangent_position.y, 400, -400);

//       const current_position = this.node.getPosition();
//       current_position.lerp(tangent_position, 0.1, current_position);
//       this.node.setPosition(current_position); 
     

//     } else {
//       this.canvas.fitHeight = false;
//       this.canvas.fitWidth = true;
//       cc.find("Canvas/Main Camera").getComponent(cc.Camera).zoomRatio = 4;
//       const tangent_position = this.Player_Node.getPosition();
//       tangent_position.x = cc.misc.clampf(tangent_position.x, 1500, -1500);
//       tangent_position.y = cc.misc.clampf(tangent_position.y, 800, -800);

//       const current_position = this.node.getPosition();
//       current_position.lerp(tangent_position, 0.1, current_position);
//       this.node.setPosition(current_position);
//     }

//   }

//   public onDestroy() {
//     window.onresize = null;
//   }

//   onWindowResize(){
    
//       console.log("rotate")
//     }
   


// }

const { ccclass, property } = cc._decorator;

@ccclass
export default class cameraControl extends cc.Component {
  public static instance: cameraControl = null;

  protected onLoad(): void {
    cameraControl.instance = this;
    window.onresize = this.onWindowResize.bind(this);
    cc.view.setDesignResolutionSize(4000, 1500, cc.ResolutionPolicy.SHOW_ALL);
  }

  @property(cc.Node)
  Player_Node: cc.Node = null;

  @property(cc.Canvas)
  canvas: cc.Canvas = null;

  @property(cc.Node)
  button: cc.Node = null;

  @property(cc.Node)
  button_2: cc.Node = null;

  protected update(dt) {
    this.makeReponsive();
  }

  public makeReponsive() {
    const deviceResolution = cc.view.getFrameSize();
    if (deviceResolution.width < deviceResolution.height) {
      this.canvas.fitHeight = true;
      this.canvas.fitWidth = false;
      cc.find("Canvas/Main Camera").getComponent(cc.Camera).zoomRatio = 1;
      const tangent_position = this.Player_Node.getPosition();
      tangent_position.x = cc.misc.clampf(tangent_position.x, 1500, -1500);
      tangent_position.y = cc.misc.clampf(tangent_position.y, 400, -400);

      const current_position = this.node.getPosition();
      current_position.lerp(tangent_position, 0.1, current_position);
      this.node.setPosition(current_position);
    } else {
      this.canvas.fitHeight = false;
      this.canvas.fitWidth = true;
      cc.find("Canvas/Main Camera").getComponent(cc.Camera).zoomRatio = 4;
      const tangent_position = this.Player_Node.getPosition();
      tangent_position.x = cc.misc.clampf(tangent_position.x, 1500, -1500);
      tangent_position.y = cc.misc.clampf(tangent_position.y, 800, -800);

      const current_position = this.node.getPosition();
      current_position.lerp(tangent_position, 0.1, current_position);
      this.node.setPosition(current_position);
    }
  }

  public onDestroy() {
    window.onresize = null;
  }

  onWindowResize() {
    console.log("rotate");
  }
}



