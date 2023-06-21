import Blades_all from "./Blades_all";

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameManager extends cc.Component {

    public static instance: GameManager = null;

    @property(cc.Label)
    ScoreLabel: cc.Label = null;

    @property
    Score: number = 0;

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
        }

    }



}
