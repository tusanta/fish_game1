import Blades_all from "./Blades_all";
import Player from "./Player";
import score from "./score";


const { ccclass, property } = cc._decorator;
@ccclass
export default class GameManager extends cc.Component {

    public static instance: GameManager = null;

    @property(cc.Label)
    ScoreLabel: cc.Label = null;

    @property
    Score: number = 0;

    @property(cc.Node)
    win: cc.Node = null;

    @property(cc.Node)
    nextLevel: cc.Node = null;

    @property(cc.Animation)
    btnNextLv: cc.Animation = null;

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        GameManager.instance = this;
    }
    public gainScore() {
        this.Score += 1;
        const scoreDisplay = cc.find("Canvas/Main Camera/ScoreLabel").getComponent(cc.Label);
        scoreDisplay.string = "score: " + this.Score;

        if (this.Score === 5) {
            Blades_all.instance.onLevelUp(5);
        } else if (this.Score === 10) {
            Blades_all.instance.onLevelUp(10);

        } else if (this.Score === 15) {
            Blades_all.instance.onLevelUp(15);
        } else if (this.Score === 20) {
            Blades_all.instance.onLevelUp(20);
        } else if(this.Score === 42){
            Player.instance.node.active = false;
            score.instance.onDespawn();
            this.scheduleOnce(() => {
                this.win.active = true;
            }, 0.5);
            this.scheduleOnce(() => {
                this.win.active = false;
            }, 3);
            this.scheduleOnce(() => {
                this.nextLevel.active = true;

            }, 3.5);
            this.scheduleOnce(() => {
                this.btnNextLv.play("Button_nextLv");

            }, 4.5);

        }

    }

}
