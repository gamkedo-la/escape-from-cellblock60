function addSkeleton(roomId){
    tempSkeleton = new skeleton(roomId);
    enemyList.push(tempSkeleton);
}


class skeleton extends enemy {
    constructor(roomId){
        super(roomId);
        this.init(skeletonPic, "red");
        //animation
        this.width = 50;
        this.sheight = 51;
        this.advanceFrameAmount = 5
        this.spriteNumberOfFrames = 4
        //shots
        this.totalShots = 0;
    }

    draw = function(){
        if(this.roomId != currentRoomId){ return };
        this.cycleMovingAnimation();

        this.sx = this.spriteIndex * this.width;
        console.log(this.sx)
       // console.log("SX: " + this.sx + " SY: " + this.sy + " swidth " + this.swidth + " sHeight "+ this.sheight);
        canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y, 50, 50);
    }

	cycleMovingAnimation = function() {
        if (this.frameCount > this.advanceFrameAmount) {
          this.frameCount = 0;
          if(this.spriteIndex < this.spriteNumberOfFrames-1) {
            this.spriteIndex += 1;

          } else {
            this.spriteIndex = 0;
          }
        }
      };
}