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
        super.draw();
        if(this.roomId != currentRoomId){ return };
        ghost_wisp(this.x+15, this.y+50);
    }
}