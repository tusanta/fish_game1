

import player_all from "../player_all";
const { ccclass, property } = cc._decorator;

@ccclass
export default class makePlayer_2 extends cc.Component {
    public static instance: makePlayer_2 = null;
    public static getInstance(): makePlayer_2 {
        if (!makePlayer_2.instance) {
            makePlayer_2.instance = new makePlayer_2();
        }
        return makePlayer_2.instance;
    }

   @property
   public isBoolean : Boolean = false;
   
    protected onLoad(): void {
        makePlayer_2.instance = this;

        cc.director.preloadScene("Save_sence");

        this.node.on("touchstart", () => {
            cc.director.loadScene("Save_sence");
            this.isBoolean = true;

        });        
    }

    





}
