function addGhost(roomId){
    tempghost = new ghost(roomId);
    enemyList.push(tempghost);
}

class ghost extends enemy {
    constructor(roomId){
        super(roomId);
        this.init(ghostPic, "red");
    }
}