

import Character from "./Character";
import Joystick from "./joystick";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends Character {

  static instance: Player = null;

  public static getInstance(): Player {
    return Player.instance;
  }
  protected onLoad() {
    Player.instance = this;
  }

  @property(Joystick)
  joystick: Joystick = null;

  @property
  speed: number = 100;

  @property
  private isMoving: boolean = false;



  protected update(dt: number) {
    const direction = this.joystick.direction; // Lấy vector hướng từ direction của joystick

    // Kiểm tra xem joystick có di chuyển không
    if (direction.x === 0 && direction.y === 0) {
      this.isMoving = false;
      return; // Không di chuyển, thoát khỏi hàm update
    }
    if (!this.isMoving) { // trạng thái không di chuyển trước đó: isMoving = false
      this.isMoving = true; // đánh dấu player đang di chuyển
    }

    // tính góc quay rotationAngle dựa trên vector hướng direction
    const rotationAngle = Math.atan2(direction.y, direction.x) * 180 / Math.PI; // Math.atan2() được sử dụng để tính toán góc giữa hai điểm (direction.y, direction.x), và sau đó chuyển đổi từ radian sang độ bằng cách nhân với 180 và chia cho Math.PI.
    this.node.angle = rotationAngle; // gán giá trị góc quay rotationAngle cho thuộc tính angle của node (Player), để xoay Player theo hướng tương ứng.


    const posX = this.speed * direction.x; // tính toán giá trị di chuyển theo phương x 
    const posY = this.speed * direction.y; // tính toán giá trị di chuyển theo phương y

    if (posX > 0) { // quay Player theo hướng di chuyển.
      this.node.setScale(1, 1)
    }
    else {
      this.node.setScale(1, -1)
    }

    this.node.x += posX; //  cập nhật giá trị tọa độ x để di chuyển theo phương x.
    this.node.y += posY; //  cập nhật giá trị tọa độ y để di chuyển theo phương y.


    // va chạm khung hình 

    const minX = -cc.winSize.width / 2.25; //cc.winSize.width : chiều rộng cửa sổ trò chơi
    const maxX = cc.winSize.width / 2.25;
    const minY = -cc.winSize.height / 2.5; // winSize.height : chiều cao cửa sổ trò  chơi
    const maxY = cc.winSize.height / 3;

    if (this.node.x < minX) { // nếu tọa độ x của player < minx
      this.node.x = minX; // => tọa độ x = minx
    } else if (this.node.x > maxX) { // nếu tọa độ x của player > maxx
      this.node.x = maxX;// => tọa độ x = maxx
    }

    if (this.node.y < minY) { // ...
      this.node.y = minY;
    } else if (this.node.y > maxY) {
      this.node.y = maxY;
    }

  }
}
