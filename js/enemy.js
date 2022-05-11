// tuning constants
const AI_FRAME_THINK_TIME = 60;
var enemyList = [];
var countEnemiesKilled = 0;

function addEnemy(roomId) {
    var tempEnemy = new enemy();
    enemyList.push(tempEnemy);
}

class enemy {
    // variables to keep track of position
    constructor(roomId) {
        this.roomId = roomId;
        this.x;
        this.y;
	    this.yOffset = 0;
	    this.frameCount = 0;
		this.frameStep = 1;
        this.tilePath = [];
        this.pathfindingNow = false;
        this.framesBeforeReThink = AI_FRAME_THINK_TIME;
        this.moving = false;
        this.patrolling = true;
        this.resting = false;
		this.tracking = false;
        this.trackPlayerRange = 250;
        this.myRow = 0;
        this.myCol = 0;
        this.enemyMoveSpeed = 2;
        this.ramCoolOff = 0;
        this.isRamming = false;

        // move states
        this.move_North = false;
        this.move_East = false;
        this.move_South = false;
        this.move_West = false;

        //shots
        this.myProjectileList = [];
        this.totalShots = 1;
        this.projectileX = 0;
        this.projectileY = 0;

        //animation
        this.sx = 0;
        this.sy = 0;
        this.swidth = 50;
        this.sheight = 50;
        this.spriteIndex = 0;
        this.spriteNumberOfFrames = 3;

        //full health
        this.fullHealth = 100; // or should this be set by a passed parameter in init?
        this.dead = false;
        this.rect = {
            x: this.x,
            y: this.y,
            width: this.swidth,
            height: this.sheight,
        }
    }

    init(whichGraphic, whichName) {
        this.myBitmap = whichGraphic;
        this.myName = whichName;
        this.health = this.fullHealth;
        this.reset();
    }

    reset() {
        if (this.homeX == undefined) {
            for (var i = 0; i < roomGrid.floor.length; i++) {
                // draw floors underneath enemy tiles
                if (roomGrid.floor[i] == TILE_ENEMY
                    || roomGrid.floor[i] == TILE_OCTOGOLEM
                    || roomGrid.floor[i] == TILE_SKELETON
                    ) {
                    var tileRow = Math.floor(i / ROOM_COLS);
                    var tileCol = i % ROOM_COLS;
                    this.homeX = tileCol * TILE_W + 0.5 * TILE_W;
                    this.homeY = tileRow * TILE_H + 0.5 * TILE_H;
                    roomGrid.floor[i] = TILE_EMPTY;
                    break; // found it, so no need to keep searching 
                } // end of if
            } // end of for
        } // end of if position not saved yet

        this.x = this.homeX;
		this.y = this.yOffset = this.homeY;
		this.frameCount = 0;

    } // end of reset

    move() {
        //pathfinding
        if(this.roomId != currentRoomId){ return };

        this.rect = {
            x: this.x,
            y: this.y,
            width: this.swidth,
            height: this.sheight,
        }


        if (p1.swingSwordCooldown) {
           if(overlaps(p1.swordRect, this.rect)){
               this.hit(100);
               console.log("enemy hit");
               let randy = Math.floor(Math.random()*4);
               sfx("sounds/sword_clang_"+randy+".wav",0.1); // FIXME: make them MP3s for smaller size?
           }
        }
        if (this.framesBeforeReThink-- < 0) {
            this.framesBeforeReThink = AI_FRAME_THINK_TIME;
            //check if within range of the player
            var playerDistance = dist(p1.x, p1.y, this.x, this.y);

            this.resting = this.patrolling = false;

            if (playerDistance >= this.trackPlayerRange) {
                if (randomIntFromInterval(0, 10) < 4) {
                    this.resting = true;
					this.onStateChange("resting");
                } else {
                    this.patrolling = true;
					this.onStateChange("patrolling");
                }
            } else {
				this.tracking = true;
				this.onStateChange("tracking");
			}

            if (this.patrolling) { //patrolling
                var patrolLocationX = randomIntFromInterval(0, 800);
                var patrolLocationY = randomIntFromInterval(0, 600);
                var patrolToLocation = pixCoordToIndex(patrolLocationX, patrolLocationY);
                startPath(patrolToLocation, this);

            } else if (this.resting) {
                this.move_East = this.move_West = this.move_North = this.move_South = false;
            } else { // tracking player
                var playerIdx = pixCoordToIndex(p1.x, p1.y);
                startPath(playerIdx, this);
            }

            if(this.enemyCanMelee){
                if(p1.inMeleeRange(this.x, this.y)){
                    //console.log("Melee Combat Started");
                    if(this.usesPoleArm){
                      //  console.log("Attacking with PoleArm");
                        this.poleArmAttacking = true;
                        this.enemyMoveSpeed = 0;
                        if(p1.x > this.x && 
                           p1.y > this.y - 25 && 
                           p1.y < this.y + 25)
                            {
                            this.poleArmX = this.x //+ 150;
                            this.poleArmY = this.y;
                          //  console.log("Pole arm to the right");
                            if(p1.checkForCollision(this.poleArmX, this.poleArmY)){
                                console.log("Hit")
                                sfx("sounds/hurt.mp3",0.025);
                                p1.hit(5);
                                blood_particles(p1.x, p1.y);
                            }
                            return;
                        }
                        if(p1.x < this.x &&
                            p1.y > this.y - 25 && 
                            p1.y < this.y + 25)
                            {
                            this.poleArmX = this.x //- 150;
                            this.poleArmY = this.y;
                            console.log("Pole arm to the left")
                            if(p1.checkForCollision(this.poleArmX, this.poleArmY)){
                                console.log("Hit")
                                sfx("sounds/hurt.mp3",0.025);
                                p1.hit(5);
                                blood_particles(p1.x, p1.y);
                            }
                            return;
                        }
                        if(p1.y < this.y){
                            this.poleArmX = this.x;
                            this.poleArmY = this.y //- 150;
                            console.log("Pole arm above");
                            if(p1.checkForCollision(this.poleArmX, this.poleArmY)){
                                console.log("Hit")
                                sfx("sounds/hurt.mp3",0.025);
                                p1.hit(5);
                                blood_particles(p1.x, p1.y);
                            }
                            return;
                        }
                        if(p1.y > this.y){
                            this.poleArmX = this.x;
                            this.poleArmY = this.y //+ 150;
                            console.log("Pole arm below")
                            if(p1.checkForCollision(this.poleArmX, this.poleArmY)){
                                console.log("Hit")
                                sfx("sounds/hurt.mp3",0.025);
                                p1.hit(5);
                                blood_particles(p1.x, p1.y);
                            }
                            return;
                        }
                        console.log("Suppose to attack with polearm, but no direction")
                    } 
                } else {
                    this.poleArmAttacking = false;
                    this.enemyMoveSpeed = 2;
                }
            }    
        }

        var nextX = this.x;
        var nextY = this.y;

        var enemyCol = Math.floor(this.x / TILE_W);
        var enemyRow = Math.floor(this.y / TILE_H);

        var enemyCurrentTileIndex = roomTileToIndex(enemyCol, enemyRow);

        if (this.tilePath.length > 0) {
            var targetIndex = this.tilePath[0];
            var targetC = targetIndex % ROOM_COLS;
            var targetR = Math.floor(targetIndex / ROOM_COLS);
            var targetX = targetC * TILE_W + (TILE_W * 0.5);
            var targetY = targetR * TILE_H + (TILE_H * 0.5);
            var deltaX = Math.abs(targetX - this.x);
            var deltaY = Math.abs(targetY - this.y);

            this.move_East = this.move_West = this.move_North = this.move_South = false;

            if (deltaX <= this.enemyMoveSpeed) {
                this.x = targetX;
                if (deltaY <= this.enemyMoveSpeed) {
                    this.y = targetY;
                    this.tilePath.shift();
                } else if (targetY < this.y) {
                    this.move_North = true;
                } else {
                    this.move_South = true;
                }
            } else if (deltaY <= this.enemyMoveSpeed) {
                this.y = targetY;
                if (deltaX <= this.enemyMoveSpeed) {
                    this.x = targetX;
                    this.tilePath.shift();
                } else if (targetX < this.x) {
                    this.move_West = true;
                } else {
                    this.move_East = true;
                }
            } else { // move towards center of closest tile
                targetX = enemyCol * TILE_W + (TILE_W * 0.5);
                targetY = enemyRow * TILE_H + (TILE_H * 0.5);
                if (targetY < this.y - this.enemyMoveSpeed) {
                    this.move_North = true;
                } else if (targetY > this.y + this.enemyMoveSpeed) {
                    this.move_South = true;
                } else if (targetX < this.x) {
                    this.move_West = true;
                } else {
                    this.move_East = true;
                }
            }
        }

        if (this.move_North || this.move_East || this.move_South || this.move_West) {
            this.moving = true;
            this.sx = this.swidth;
        } else {
            this.moving = false;
            this.sx = 0;
        }

        if (this.move_North) {
            nextY -= this.enemyMoveSpeed;
            this.sy = this.sheight;
            this.projectileX = nextX + 20;
            this.projectileY = nextY;
        }
        if (this.move_East) {
            nextX += this.enemyMoveSpeed;
            this.sy = this.sheight*2;
            this.projectileX = nextX + 20;
            this.projectileY = nextY + (this.sheight/2) + 5; 
        }
        if (this.move_South) {
            nextY += this.enemyMoveSpeed;
            this.sy = 0;
            this.projectileX = nextX + 20;
            this.projectileY = nextY + (this.sheight/2);
        }
            if (this.move_West) {
            nextX -= this.enemyMoveSpeed;
            this.sy = this.sheight*3;
            this.projectileX = nextX + 10;
            this.projectileY = nextY + (this.sheight/2) + 5;
        }

        if(enemyRow == p1.row || enemyCol == p1.col){
            this.shootProjectile();
        }

        //Ram Player
        if(this.enemyCanRam){
            this.ramCoolOff--
            this.isRamming = false;
            if(this.ramCoolOff > 0){
                if(enemyRow == p1.row || enemyCol == p1.col){
                    if(enemyRow == p1.row){
                            this.enemyMoveSpeed = this.ramSpeed;
                            this.isRamming = true;
                    } else if (enemyCol == p1.col){
                        this.enemyMoveSpeed = 8;
                        this.isRamming = true;
                    } else {
                        this.enemyMoveSpeed = this.walkSpeed;
                    }
                    var playerIdx = pixCoordToIndex(p1.x, p1.y);
                        startPath(playerIdx, this);
                }
            }
            if(this.ramCoolOff <= 0){
                this.ramCoolOff--;
                this.enemyMoveSpeed = 2;
                if(this.ramCoolOff < -400){
                    this.ramCoolOff = 60;
                }
            }

            if(p1.checkForCollision(this.x, this.y)){
                console.log("Hit")
                sfx("sounds/hurt.mp3",0.025);
                p1.hit(5);
                blood_particles(p1.x, p1.y);
            }
        }
        
        var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
        var walkIntoTileType = TILE_WALL_7;

        if (walkIntoTileIndex != undefined) {
            walkIntoTileType = roomGrid.floor[walkIntoTileIndex];
        }

        if(tileTypeWalkable(walkIntoTileType)){
            this.x = nextX;
            this.y = nextY;
        } 

        for(var i = 0; i < this.myProjectileList.length; i++){ //move projectile
            this.myProjectileList[i].move();
        }

        for(var i = this.myProjectileList.length - 1; i >= 0; i--){
           if(this.myProjectileList[i].readyToRemove){
               this.myProjectileList.splice(i,1); //remove projectile
           }
        }

		if (this.frameCount >= 60) {
			this.frameStep = -1;
		} else if (this.frameCount <= 0) {
			this.frameStep = 1;
		}
		this.frameCount += this.frameStep;
		this.yOffset = Math.sin(-1 + this.frameCount/30)*8;

    }

    shootProjectile() {
        if (this.myProjectileList.length < this.totalShots) {
            let tempShot = new ProjectileClass();
            tempShot.shootFrom(this);
            this.myProjectileList.push(tempShot);
        }
    }

    animate() {
        this.swidth = this.swidth + this.swidth
        this.sx = this.swidth
        console.log("animate)")
        if (this.swidth > 300) {
            this.swidth = 0;
        }
    }

    draw() {
        if(this.roomId != currentRoomId){ return };
        //	this.animate();
        canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y + this.yOffset, 50, 50);
        for(var i = 0; i < this.myProjectileList.length; i++){
            this.myProjectileList[i].draw();
        }
        
        // canvasContext.strokeStyle = "red";
        // canvasContext.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }

    // calculate damage recieved and deduct from current health, trigger death
    hit(damage) {
        // dodge?
        

        // damage reduction?

        // reduce health
        this.health -= damage;

        if (this.health <= 0) {
           this.dead = true;
           countEnemiesKilled = countEnemiesKilled + 1;
        }
    }

	onStateChange(state) {
	}
}
 // end of class
