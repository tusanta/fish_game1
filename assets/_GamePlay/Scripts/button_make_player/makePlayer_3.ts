

import player_all from "../player_all";
const { ccclass, property } = cc._decorator;

@ccclass
export default class makePlayer_3 extends cc.Component {
    public static instance: makePlayer_3 = null;
    public static getInstance(): makePlayer_3 {
        if (!makePlayer_3.instance) {
            makePlayer_3.instance = new makePlayer_3();
        }
        return makePlayer_3.instance;
    }
   @property
   public isBoolean_2 : Boolean = false;
    protected onLoad(): void {
        makePlayer_3.instance = this;

        cc.director.preloadScene("Save_sence");
        
        this.node.on("touchstart", () => {
            cc.director.loadScene("Save_sence");
            this.isBoolean_2 = true;

        });        
    }





}
