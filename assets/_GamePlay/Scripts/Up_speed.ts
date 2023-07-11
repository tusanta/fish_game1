
import Player from "./Player";
const { ccclass, property } = cc._decorator;

@ccclass
export default class up_speed extends cc.Component {
    static instance: up_speed = null;


    @property
    speed: number = 0;
    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null;

    @property(cc.Node)
    string: cc.Node = null;
    @property
    private speedCount: number = 0;
    private readonly maxSpeedCount: number = 5;

    @property(cc.Node)
    test : cc.Node;

    protected onLoad() {
        up_speed.instance = this;

        this.node.on(cc.Node.EventType.TOUCH_START, this.on_click_start, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.on_click_end, this);

        // console.log(this.test.position);
        // const deviceResolution = cc.view.getFrameSize();

        // console.log(deviceResolution.width);
        // console.log(deviceResolution.height);
        // //

        // this.test.position = cc.v3(deviceResolution.width, deviceResolution.height, 0);
        // this.Test();

    }

    public on_click_start(event: Touch) {
        this.hand.active = false
        this.string.active = false;

        if (this.speedCount >= this.maxSpeedCount) {
            return;
        }
        this.speed += 100;
        const speedUpdate = Player.getInstance().getPlayerSpeed();
        const speedReturn = speedUpdate + this.speed;
        this.node.setScale(cc.v2(0.8, 0.8));
        this.speedCount++;
        return speedReturn;
    }

    public on_click_end(event: Touch) {
        this.node.setScale(cc.v2(1, 1));

    }

    public onDespawn_speed() {
        this.node.active = false;
    }
    protected update(dt: number): void {
        if (Player.getInstance().node.active == false) {
            this.onDespawn_speed();
        }
      
        }

    //test

    // protected Test(): void {
    //     const viewSize = cc.view.getVisibleSize();
      
    //     const cameraWorldPos = this.camera.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
    //     const cameraSpacePos = this.node.parent.convertToNodeSpaceAR(cameraWorldPos);
      
    //     const anchorPoint = cc.v2(-0.6, -1.1);
    //     const testParentPos = cc.v3(
    //       cameraSpacePos.x + (viewSize.width / 2) * anchorPoint.x,
    //       cameraSpacePos.y + (viewSize.height / 2) * anchorPoint.y
    //     );
    //     const testWorldPos = this.test.parent.convertToWorldSpaceAR(testParentPos);
      
    //     this.test.position = testWorldPos;
    //     this.test.setAnchorPoint(anchorPoint);
    //   }
    // protected Test(): void {
    //     const viewSize = cc.view.getVisibleSize();
        
    //     const anchorPoint = cc.v2(10, 10);
    //     const testParentPos = cc.v3(
    //       viewSize.width,
    //       viewSize.height
    //     );
    //     const testWorldPos = this.camera.node.convertToWorldSpaceAR(testParentPos);
        
    //     this.test.position = testWorldPos;
    //     this.test.setAnchorPoint(anchorPoint);
    //   }
      
    protected start(): void {
        this.setAnchor(this.test, cc.v2(1,1));
    }

    public setAnchor(node: cc.Node, anchor: cc.Vec2){
        anchor = anchor.mul(2).sub(cc.v2(1,1));
        node.position = cc.v3(anchor.x * cc.view.getVisibleSize().width, anchor.y * cc.view.getVisibleSize().height).divide(2);

        console.log(anchor);
        console.log("win size =",cc.winSize);
        console.log("win sizew =",cc.winSize.width);

        console.log("win sizeh =",cc.winSize.height);


        console.log("frame size =", cc.view.getFrameSize());
        console.log("canvas size =",cc.view.getCanvasSize());
        console.log("visible Size =",cc.view.getVisibleSize());
        console.log("visible Size InPixel =",cc.view.getVisibleSizeInPixel());

    }
      
    // protected start(): void {
    //     this.setAnchor(this.test, cc.v2(.5, .5));
    //   }
      
    //   public setAnchor(node: cc.Node, anchor: cc.Vec2): void {
    //     const visibleSize = cc.view.getVisibleSize();
    //     const designResolution = cc.view.getDesignResolutionSize();
    //     const aspectRatio = designResolution.width / designResolution.height;
      
    //     const screenAspectRatio = visibleSize.width / visibleSize.height;
      
    //     let scale = 1;
      
    //     if (screenAspectRatio > aspectRatio) {
    //       // Màn hình có tỷ lệ khung hình ngang hơn
    //       const targetWidth = designResolution.height * screenAspectRatio;
    //       scale = visibleSize.width / targetWidth;
    //     } else {
    //       // Màn hình có tỷ lệ khung hình dọc hơn hoặc tương đương
    //       const targetHeight = designResolution.width / screenAspectRatio;
    //       scale = visibleSize.height / targetHeight;
    //     }
      
    //     let positionX = anchor.x * designResolution.width * scale;
    //     let positionY = anchor.y * designResolution.height * scale;
      
    //     node.setPosition(positionX, positionY);
    //     node.setScale(scale);
    //   }
      
      
      
}
      
