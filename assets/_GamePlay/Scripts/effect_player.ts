import Player from "./Player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

// @property(Player)
// player: Player = null;

protected onLoad(): void {
    this.node.position = Player.instance.node.position;
}
}
