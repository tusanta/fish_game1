// import Player from "./Player";


// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class EnemyManager extends cc.Component {

//     @property(cc.Node)
//     Enemy: cc.Node = null;

//     @property
//     EnemyDuration : number = 100;

//     @property(Player)
//     player: Player;


//     onLoad () {
//         this.getNewEnemy();
//     }


//     //random enemy
//     public getRanEnemyPos(){
//         let randX = 0;
//         let randY = 0;
//         const maxX = this.node.width / 2;
//         const maxY = this.node.height / 2;
//         randX = (Math.random() - 0.5) * 2 * maxX;
//         randY = (Math.random() - 0.5) * 2 * maxY;
//         return cc.v2(randX, randY);
//     }

//     // new Enemy
//     public getNewEnemy(){
//         let newEnemy = cc.instantiate(this.Enemy);
//         this.node.addChild(newEnemy);
//         let startPos = this.getRanEnemyPos();
//         newEnemy.setPosition(startPos);
//         let moveLeft = cc.moveBy(this.EnemyDuration, cc.v2(-400,0));
//         // let moveRight = cc.moveBy(this.EnemyDuration, cc.v2(0,1500));

//         let resetPos = cc.callFunc(function(){
//             newEnemy.x = startPos.x;
//             newEnemy.y = this.getRanEnemyPos();
//           }, this);

//         let moveAction = cc.repeatForever(cc.sequence(moveLeft, resetPos));
//         newEnemy.runAction(moveAction);
//         // let moveAction2 = cc.repeatForever(cc.sequence(moveRight, resetPos));
//         // newEnemy.runAction(moveAction2);

//     }

   
    



//     // update (dt) {}
// }
