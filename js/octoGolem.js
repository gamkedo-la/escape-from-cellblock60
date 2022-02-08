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
        const LINKS = 12;
        const LINKSPACING = 8;
        const ARMS = 4; // per side
        const ARMSPACING = 10; // vertically
        const WOBBLESIZE = 50;
        const WOBBLESPD = .0025;
        const SHOULDERWIDTH = 60;
        const ARMOFFSETX = -15;
        const ARMOFFSETY = -30;
        let linkx, linky, linkwobble, armdir, linkpic;
        for (let sidenum=0; sidenum<2; sidenum++) {
            for (let armnum=0; armnum<ARMS; armnum++) {
                for (let linknum=0; linknum<LINKS; linknum++) {
                    armdir = sidenum?1:-1;
                    linkx = this.x+ARMOFFSETX+armdir*(linknum*LINKSPACING);
                    if (sidenum==1) linkx += SHOULDERWIDTH;
                    linkwobble = Math.sin((performance.now()+linkx*10+armnum*15)*(WOBBLESPD+armnum/1500))*WOBBLESIZE;
                    linkwobble *= linknum/LINKS; // smaller movement near shoulders
                    linky = this.y+ARMOFFSETY+linkwobble;
                    linky += armnum*ARMSPACING;
                    //linkpic = linknum%2?chain1Pic:chain2Pic; // alternate images! like a real chain
                    linkpic = chain1Pic; // all the same image
                    canvasContext.drawImage(linkpic,linkx,linky);
                }
            }
        }
    }    
    //var playerDistance = dist(p1.x, p1.y, this.x, this.y);

}