import fish_2 from "./fish_2";
const { ccclass, property } = cc._decorator;

@ccclass
export default class food_start extends cc.Component {

   protected update(dt: number): void {
       if(fish_2.instance.node.active == false){
        this.node.active = false;
        console.log("food===");
       }
   }
}


