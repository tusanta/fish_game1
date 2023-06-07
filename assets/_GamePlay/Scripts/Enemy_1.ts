
import Character from "./Character";
import Player from "./Player";

const { ccclass, property } = cc._decorator;
@ccclass
export default class Enemy_1 extends Character {
  @property(cc.Node)
  Food: cc.Node = null;

  @property(Player)
  player: Player = null;
  @property
  private speed: number = 10; // Tốc độ di chuyển

  @property
  isPrevew: boolean = false;
  private startPosition: cc.Vec3; // Điểm bắt đầu
  private targetPosition: cc.Vec3; // Điểm đến
  private isMoving: boolean = false; // Trạng thái di chuyển

  protected onLoad() {
    this.player = Player.getInstance(); // Lấy phiên bản hiện tại của Player
    this.startPosition = this.node.position; // Đặt điểm bắt đầu là vị trí hiện tại Enemy
    this.targetPosition = this.player.node.position; // Đặt điểm đến là vị trí của player
    this.isMoving = true; // Bắt đầu di chuyển khi run
    this.onNextPos();
    this.onRandomDirection();
  }

  // protected update(dt: number) {
  //   if (this.isMoving) {
  //     const direction = this.targetPosition.sub(this.node.position); // Tính toán vector hướng từ vị trí hiện tại đến điểm đến
  //     const normalizedDirection = direction.normalize();// Chuẩn hóa vector hướng
  //     const movement = normalizedDirection.mul(this.speed * dt); // Tính toán khoảng di chuyển dựa trên tốc độ và thời gian delta
  //     if (direction.mag() <= movement.mag()) {  // Kiểm tra xem Enemy đã đến gần điểm đến chưa
  //       this.node.position = this.targetPosition; // Đặt vị trí của Enemy là điểm đến để không bị vượt qua điểm đến
  //       this.isMoving = false; // Dừng di chuyển
  //       this.onNextPos(); // Gọi hàm khi đến điểm đến để thêm 1 đoạn di chuyển qua player
  //     } else {
  //       this.node.position = this.node.position.add(movement);  // Cập nhật vị trí của Enemy
  //     }   
  //     const rotationAngle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;  // Xoay Enemy theo hướng di chuyển
  //     this.node.angle = rotationAngle;

  //     // Set scale của Enemy theo hướng di chuyển
  //     const posX = direction.x;
  //     const posY = direction.y;
  //     if (posX > 0) {
  //       this.node.setScale(1, 1);
  //     } else {
  //       this.node.setScale(1, -1);
  //     }
  //   }
  // }

  protected update(dt: number) {
    if (this.isMoving) {
      const direction = this.targetPosition.sub(this.node.position);
      const normalizedDirection = direction.normalize();
      const movement = normalizedDirection.mul(this.speed * dt);
  
      if (direction.mag() <= movement.mag()) {
        this.node.position = this.targetPosition;
        this.isMoving = false;
        this.onNextPos();
      }
      else {
        this.node.position = this.node.position.add(movement);
      }

      
  
      const rotationAngle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
      this.node.angle = rotationAngle;
  
      const posX = direction.x;
      const posY = direction.y;

      if (posX > 0) {
        this.node.setScale(1, 1);
      } else {
        this.node.setScale(1, -1);
      }
     }
        // // Kiểm tra khoảng cách giữa Enemy và Player
        //  const playerPosition = this.player.node.position;
        //  const enemyPosition = this.node.position;
        //  const distance = playerPosition.sub(enemyPosition).mag();
         
        // if (this.isMoving  && distance <= 200) { //  khoảng cách giữa enenmy và player
        //   this.targetPosition = playerPosition;
          
        // }
  
  }
  
  public onHit() {
    super.onHit();
    this.Food.active = true; // Hiện food khi enemy chết
    this.Food.position = this.node.position; // Đặt vị trí của food bằng vị trí của enemy
    
  }

  private onNextPos() {
    if (this.player.getAlive() == true) {
      const newDirection = this.player.node.position.sub(this.node.position); // Tạo một vector hướng mới từ vị trí hiện tại đến vị trí của player
      this.startPosition = this.node.position;  // Đặt điểm bắt đầu là vị trí hiện tại của Enemy
      this.targetPosition = this.player.node.position.add(newDirection);  // Đặt điểm đến là vị trí của player + vector hướng mới để đi qua vị trí của player

    } else {  // di chuyển ngẫu nghiên khi palaywer chết

      this.targetPosition = this.onRandomDirection();
    }

    this.isMoving = true; // Bắt đầu di chuyển tới điểm đến mới
  }

  private onRandomDirection(): cc.Vec3 {
   
    const minX = -cc.winSize.width / 2.3;
    const maxX = cc.winSize.width / 2.3;
    const minY = -cc.winSize.height / 2.5;
    const maxY = cc.winSize.height / 3;
  
    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;
    return cc.v3(randomX, randomY, 0);
  }
  
}

