// CHAIN GOLEM
// a non-moving enemy with six arms

function addOctoGolem(){
    enemyList.push(new octoGolem());
}

class octoGolem extends enemy {
    constructor(){
        console.log("spawning a new octoGolem!");
        super();
        this.init(octoGolemPic, "red");
        this.moving = false;
    }

    move(){
        // this boss does not move
    }

    animate() {
    }
    
    draw() {
        canvasContext.drawImage(this.myBitmap,this.x,this.y-31);
        
        // draw the six tentacles
        const LINKS = 8;
        const LINKSPACING = 8;
        const ARMS = 3;
        const ARMSPACING = 16;
        const WOBBLESIZE = 16;
        const WOBBLESPD = .005;
        let linkx, linky, linkwobble, armdir;
        for (let sidenum=0; sidenum<2; sidenum++) {
            for (let armnum=0; armnum<ARMS; armnum++) {
                for (let linknum=0; linknum<LINKS; linknum++) {
                    armdir = sidenum?1:-1;
                    linkx = this.x + armdir*(linknum*LINKSPACING);
                    if (sidenum==1) linkx += 30;
                    linkwobble = Math.sin((performance.now()+linkx*10+armnum*15)*(WOBBLESPD+armnum/500))*WOBBLESIZE;
                    linkwobble *= linknum/LINKS; // smaller movement near shoulders
                    linky = this.y+10+linkwobble;
                    linky += armnum*ARMSPACING;
                    canvasContext.drawImage(linknum%2?chain1Pic:chain2Pic,linkx,linky);
                }
            }
        }
    }    
    //var playerDistance = dist(p1.x, p1.y, this.x, this.y);

}