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
        //shots
        this.totalShots = 0;
    }

    draw(){
        canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y, 50, 50);
    }
}