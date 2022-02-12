function addGhost(roomId){
    tempghost = new ghost(roomId);
    enemyList.push(tempghost);
}

class ghost extends enemy {
    constructor(roomId){
        super(roomId);
        this.init(ghostPic, "red");
    }

    draw(){
        /*if(this.roomId != currentRoomId){ return };
        //	this.animate();
        canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y, 50, 50);
        for(var i = 0; i < this.myProjectileList.length; i++){
            this.myProjectileList[i].draw();
        }*/
        super.draw();
        ghost_wisp(this.x+15, this.y+50);
    }
}