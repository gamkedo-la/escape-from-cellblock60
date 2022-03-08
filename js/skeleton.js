function addSkeleton(roomId){
    tempSkeleton = new skeleton(roomId);
    enemyList.push(tempSkeleton);
}


class skeleton extends enemy {
    constructor(roomId){
        super(roomId);
        this.init(skeletonPic, "red");
        //animation
        this.sheight = 51;
        this.advanceFrameAmount = 5
        //shots
        this.totalShots = 0;
    }

    draw = function(){
        if(this.roomId != currentRoomId){ return };
        this.cycleMovingAnimation();
        canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y, 50, 50);
    }

	cycleMovingAnimation = function() {
        if (this.frameCount > this.advanceFrameAmount) {
          this.frameCount = 0;
          if(this.spriteIndex < this.spriteNumberOfFrames-1) {
            this.spriteIndex += 1;
            console.log(spriteIndex)
          } else {
            this.spriteIndex = 1;
          }
        }
      };
}