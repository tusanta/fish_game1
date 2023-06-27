import Player from "./Player";
import Enemy_1 from "./Enemy_1";

const { ccclass, property } = cc._decorator;
@ccclass
export default class EnemyManager extends cc.Component {

    // @property(Player)
    // player: Player;
    @property(cc.Node)
    win: cc.Node = null;

    @property(cc.Node)
    wave_1: cc.Node = null;

    @property(Enemy_1)
    EnemyList: Enemy_1[] = [];

    @property
    public waveCount: number = 1;

    protected update(dt: number): void {
        if(this.EnemyList.length <= 0 && this.waveCount == 1){
            // this.win.active = true;

        }     
    }
//     public AddToArray(Enemy: Enemy_1) {
//         if (!this.EnemyList.includes(Enemy)) {
//           this.EnemyList.push(Enemy);
//         }
//       }
    
//       public RemoveFromArray(Enemy: Enemy_1) {
//         const index = this.EnemyList.indexOf(Enemy);
//         if (index !== -1) {
//           this.EnemyList.splice(index, 1);
//         }
// }


}

