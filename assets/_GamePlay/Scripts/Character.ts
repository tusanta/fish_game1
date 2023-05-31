

const {ccclass, property} = cc._decorator;

@ccclass
export default class Character extends cc.Component {


    public onLevelUp() {

    }

    public onHit(){
         this.node.active = false; 
          
    }
}
