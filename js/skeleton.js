function addSkeleton(roomId){
    tempSkeleton = new skeleton(roomId);
    enemyList.push(tempSkeleton);
}


class skeleton extends enemy {
    constructor(roomId){
        super(roomId);
        this.init(skeletonPic, "red");
        this.walkSpeed = 2;
        //animation
        this.width = 50;
        this.sheight = 51;
        this.advanceFrameAmount = 5
        this.spriteNumberOfFrames = 4
         //attacking abilities
        this.totalShots = 0;
        this.enemyCanRam = true;
        this.ramSpeed = 8;
        this.enemyCanMelee = true;
        this.usesPoleArm = true;
    }

    draw = function(){
        if(this.roomId != currentRoomId){ return };
        this.cycleMovingAnimation();

        
        if(this.poleArmAttacking){
          this.sx = this.spriteIndex + 4 * this.width;
        } else {
          this.sx = this.spriteIndex * this.width;
        }
        canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y, 50, 50);

        if(this.poleArmAttacking){
          outlineRect(this.poleArmX, this.poleArmY, 50, 50, "red", 3)
      }
    }

	cycleMovingAnimation = function() {
        if (this.frameCount > this.advanceFrameAmount) {
          this.frameCount = 0;
          if(this.spriteIndex < this.spriteNumberOfFrames-1) {
            this.spriteIndex += 1;

          } else {
            this.spriteIndex = 1;
          }
        }
      };
}