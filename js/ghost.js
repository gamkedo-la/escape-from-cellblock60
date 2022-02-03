function addGhost(){
    tempghost = new ghost();
    enemyList.push(tempghost);
}

class ghost extends enemy {
    constructor(){
        super();
        this.init(ghostPic, "red");
    }
}