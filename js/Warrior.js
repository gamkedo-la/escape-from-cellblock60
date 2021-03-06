// tuning constants
const PLAYER_MOVE_SPEED = 8.0;
const FRAMES_BETWEEN_ATTACK = 100;
const FOOTSTEP_INTERVAL = 250; // ms between footstep sounds
const FOOTSTEP_VOLUME = 0.1; // not too loud

var attackPowerDelay = 0;

function warriorClass() {
    // variables to keep track of position
    this.x;
    this.y;
    this.col;
    this.row;
    this.tilePath = [];
    this.pathfindingNow = false;
    this.moving = false;

    // number of frames to keep sword swing animation on screen
    this.swingSwordCooldown = 0;
    this.SWING_SWORD_COOLDOWN = 5;
    //which direction are we facing? (keys held or not)
    this.facing = 0;
    //where is the sword swoosh?
    this.swordRect = {x:0, y:0, width:0, height:0};

    // Sprite variables
    this.sx = 0; //sprite xCoord to start clipping
    this.sy = 0; //sprite yCoord to start clipping
    this.swidth = 50; //sprite width of image to be drawn
    this.sheight = 51; //sprite height to be drawn
    this.sframes = 0; //frames total per animation
    this.width = 50; //width of image
    this.height = 51; //height of image
	this.frameCount = 0; //counting the Game FPS for this character
	this.idleFrameCount = 0;
	this.deathFrameCount = 0;
    this.advanceFrameAmount = 5; //advance frame (this example: 12 times a second)
    this.spriteNumberOfFrames = 5; // this represents 4 frames of walking
    this.spriteNumberOfIdleFrames = 7;
	this.spriteNumberOfDeathFrames = 5;
	this.deathSpriteIndex = 0;
	this.finishedDeathAnimation = false;
    this.frameIndex = 0; //Animation frame for this character
    // collisions
    this.movingCollisionsX = this.x;
    this.movingCollisionsY = this.y;

    // keyboard hold state variables, to use keys more like buttons
    this.keyHeld_North = false;
    this.keyHeld_East = false;
    this.keyHeld_South = false;
    this.keyHeld_West = false;

    // player full health
    this.fullHealth = 100;
    this.hitCooldown = 0;
    this.HIT_COOLDOWN = 50;

    // key controls used for this
    this.setupControls = function(northKey, eastKey, southKey, westKey, attackKey) {
        this.controlKeyForNorth = northKey;
        this.controlKeyForEast = eastKey;
        this.controlKeyForSouth = southKey;
        this.controlKeyForWest = westKey;
        this.controlKeyForAttack = attackKey;
    }

    this.init = function(whichGraphic, whichName) {
        this.myBitmap = whichGraphic;
        this.myName = whichName;
        this.health = this.fullHealth;
        this.sword = false;
	    this.lastMovedTime = Date.now();
        this.reset();
    }

    this.reset = function() {
        this.keysHeld = 0;
        if (this.homeX == undefined) {
            for (var i = 0; i < roomGrid.floor.length; i++) {
                if (roomGrid.floor[i] == TILE_PLAYER) {
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
        this.y = this.homeY;

    } // end of reset

    this.checkForCollision = function(x,y){
        if( x > this.x && x < this.x + this.swidth &&
            y > this.y && y < this.y + this.sheight)

            return true;
    }

    this.inMeleeRange = function(x,y){
        if( x > this.x -25 && this.x + this.swidth + 25 &&
            y > this.y - 25 && y < this.y + this.sheight + 25)

            return true;
    }

    this.maybePlayFootstepSFX = function() {
        if (!this.moving) return;
        let now = performance.now();
        if (!this.lastFootstepTime) this.lastFootstepTime = now;
        if (now > this.lastFootstepTime + FOOTSTEP_INTERVAL) {
            this.lastFootstepTime = now;
            let stepnum = Math.ceil(Math.random()*8);
            let sfxurl = "sounds/footstep"+stepnum+".mp3";
            sfx(sfxurl,FOOTSTEP_VOLUME);
        }
    }

    this.move = function() {
        this.hitCooldown--;
        //this.swordRect = {x:0, y:0, width:0, height:0};
		if (this.health <= 0) {
			this.hitCooldown = 0;
			if (this.finishedDeathAnimation) {
				gameState = STATE_GAME_OVER;
			}
			return;
        }
        
        var nextX = this.x;
        var nextY = this.y;
        var movingCollisionModifierX = nextX;
        var movingCollisionModifierY = nextY;

        this.col = Math.floor(this.x / TILE_W);
        this.row = Math.floor(this.y / TILE_H);

        this.currentTileIndex = roomTileToIndex(this.col, this.row);

        if (this.tilePath.length > 0) {
            var targetIndex = this.tilePath[0];

            var targetC = targetIndex % ROOM_COLS;
            var targetR = Math.floor(targetIndex / ROOM_COLS);
            var targetX = targetC * TILE_W + (TILE_W * 0.5);
            var targetY = targetR * TILE_H + (TILE_H * 0.5);
            var deltaX = Math.abs(targetX - this.x);
            var deltaY = Math.abs(targetY - this.y);

            this.keyHeld_East = this.keyHeld_West = this.keyHeld_North = this.keyHeld_South = false;

            if (deltaX <= PLAYER_MOVE_SPEED) {
                this.x = targetX;
                if (deltaY <= PLAYER_MOVE_SPEED) {
                    this.y = targetY;
                    this.tilePath.shift();
                } else if (targetY < this.y) {
                    this.keyHeld_North = true;
                } else {
                    this.keyHeld_South = true;
                }
            } else if (deltaY <= PLAYER_MOVE_SPEED) {
                this.y = targetY;
                if (deltaX <= PLAYER_MOVE_SPEED) {
                    this.x = targetX;
                    this.tilePath.shift();
                } else if (targetX < this.x) {
                    this.keyHeld_West = true;
                } else {
                    this.keyHeld_East = true;
                }
            } else { // move towards center of closest tile
                targetX = this.col * TILE_W + (TILE_W * 0.5);
                targetY = this.row * TILE_H + (TILE_H * 0.5);
                if (targetY < this.y - PLAYER_MOVE_SPEED) {
                    this.keyHeld_North = true;
                } else if (targetY > this.y + PLAYER_MOVE_SPEED) {
                    this.keyHeld_South = true;
                } else if (targetX < this.x) {
                    this.keyHeld_West = true;
                } else {
                    this.keyHeld_East = true;
                    nextX = nextX + (this.width/2)
                }
            }
        }

        if (this.move_North || this.move_East || this.move_South || this.move_West) {
            this.moving = true;
        } else {
            this.moving = false;
        }

        this.movingCollisionsX = this.x;
        this.movingCollisionsY = this.y + (this.height/4);
        
        if (this.keyHeld_North) {
            nextY -= PLAYER_MOVE_SPEED;
            this.sy = this.sheight;
            this.moving = true;
            this.movingCollisionsY = nextY - (this.height/2)
            this.facing = NORTH;
        } /*else*/ if (this.keyHeld_East) {
            nextX += PLAYER_MOVE_SPEED; 
            this.sy = this.sheight*2;
            this.moving = true;
            this.movingCollisionsX = nextX + (this.width/4)
            this.facing = EAST;
        } /*else*/ if (this.keyHeld_South) {
            nextY += PLAYER_MOVE_SPEED;
            this.sy = 0;
            this.moving = true;
            this.movingCollisionsY = nextY + (this.height/2)
            this.facing = SOUTH;
        } /*else*/ if (this.keyHeld_West) {
            nextX -= PLAYER_MOVE_SPEED;
            this.sy = this.sheight*3;
            this.moving = true;
            this.movingCollisionsX = nextX - (this.width/4)
            this.facing = WEST;
        } /*else {
         //   this.moving = false;
        }*/

        this.maybePlayFootstepSFX();

        var walkIntoTileIndex = getTileIndexAtPixelCoord(this.movingCollisionsX, this.movingCollisionsY);
        var walkIntoTileType = TILE_EMPTY; //TILE_WALL_7;

        // this is where the TILE we hit is located
        // used to set where particles should spawn
        // as opposed to spawning at the player x,y
        var particleX = (walkIntoTileIndex % ROOM_COLS) * TILE_W + (TILE_W * 0.5);
        var particleY = Math.floor(walkIntoTileIndex / ROOM_COLS) * TILE_H + (TILE_H * 0.5);

        if (walkIntoTileIndex != undefined) {
            walkIntoTileType = liveRoomGrid[walkIntoTileIndex];
        }

        if(tileTypeWalkable(walkIntoTileType)){
            this.x = nextX;
            this.y = nextY;
        } else if (isStairUpTile(walkIntoTileType)) {
            console.log(`tile: ${walkIntoTileType} is stairs up`);
            // update level
            loadLevel(level+1);
            moveToRoom(UPPER);
            // update position
            this.x = this.movingCollisionsX - this.movingCollisionsX%50 + 25;
            this.y = this.movingCollisionsY - this.movingCollisionsY%50 + 25 - 150;
        } else if (isStairDownTile(walkIntoTileType)) {
            console.log(`tile: ${walkIntoTileType} is stairs down`);
            // update level
            loadLevel(level-1);
            // update position
            this.x = this.movingCollisionsX - this.movingCollisionsX%50 + 25;
            this.y = this.movingCollisionsY - this.movingCollisionsY%50 + 25 + 150;
        } else switch (walkIntoTileType) {
            case TILE_GOAL:
                this.reset();
                break;
            case TILE_DOOR:
            case TILE_DOOR_YELLOW_FRONT_BOTTOM:
                if (this.keysHeld > 0) {
                    sfx("sounds/door.mp3",0.5);
                    door_open_particles(particleX,particleY);
                    this.keysHeld--; // one less key
                    // open the door we touched
                    // FIXME: does this assume we touched the bottom tile even if we touched the top one?
                    roomGrid.floor[walkIntoTileIndex] = TILE_EMPTY; //change to bottom part of door open
                    let tileAbove = findTileAboveCurrent(walkIntoTileIndex);
                    roomGrid.floor[tileAbove] = TILE_EMPTY;
                    roomGrid.ceiling[tileAbove] = TILE_EMPTY; // change to top part of door open

                    // DOUBLE DOOR SUPPORT
                    // try to the left
                    if (roomGrid.floor[walkIntoTileIndex-1]==TILE_DOOR_YELLOW_FRONT_BOTTOM) {
                        console.log("double door: opening a 2nd door to the left");
                        roomGrid.floor[walkIntoTileIndex-1] = TILE_EMPTY;
                        tileAbove = findTileAboveCurrent(walkIntoTileIndex-1);
                        roomGrid.floor[tileAbove] = TILE_EMPTY;
                        roomGrid.ceiling[tileAbove] = TILE_EMPTY;
                    }
                    // and to the right
                    if (roomGrid.floor[walkIntoTileIndex+1]==TILE_DOOR_YELLOW_FRONT_BOTTOM) {
                        console.log("double door: opening a 2nd door to the right");
                        roomGrid.floor[walkIntoTileIndex+1] = TILE_EMPTY;
                        tileAbove = findTileAboveCurrent(walkIntoTileIndex+1);
                        roomGrid.floor[tileAbove] = TILE_EMPTY;
                        roomGrid.ceiling[tileAbove] = TILE_EMPTY;
                    }

                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_DOOR_YELLOW_FRONT_TOP:
                if (this.keysHeld > 0) {
                    sfx("sounds/door.mp3",0.5);
                    door_open_particles(particleX,particleY);
                    this.keysHeld--; // one less key
                    roomGrid.floor[walkIntoTileIndex] = TILE_EMPTY; //change to top part of door open
                    let tileBelow = findTileBelowCurrent(walkIntoTileIndex);
                    roomGrid.floor[tileBelow] = TILE_EMPTY; // change to bottom part of door open
                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_PRISON_GATE_BOTTOM:
                if (this.keysHeld > 0) {
                    this.keysHeld--; // one less key
                    sfx("sounds/celldoor.mp3",0.25);
                    door_open_particles(particleX,particleY);
                    roomGrid.floor[walkIntoTileIndex] = TILE_PRISON_GATE_BOTTOM_OPEN; //change to bottom part of door open
                    let tileAbove = findTileAboveCurrent(walkIntoTileIndex);
                    roomGrid.floor[tileAbove] = TILE_PRISON_GATE_TOP_OPEN; // change to top part of door open
                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_PRISON_GATE_TOP:
                if (this.keysHeld > 0) {
                    this.keysHeld--; // one less key
                    sfx("sounds/celldoor.mp3",0.25);
                    door_open_particles(particleX,particleY);
                    roomGrid.floor[walkIntoTileIndex] = TILE_PRISON_GATE_TOP_OPEN; //change to top part of door open
                    let tileBelow = findTileBelowCurrent(walkIntoTileIndex);
                    roomGrid.floor[tileBelow] = TILE_PRISON_GATE_BOTTOM_OPEN; // change to bottom part of door open
                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_DOOR_YELLOW_SIDE_CLOSED:
                if (this.keysHeld > 0) {
                    this.keysHeld--; // one less key
                    sfx("sounds/door.mp3",0.5);
                    door_open_particles(particleX,particleY);
                    roomGrid.floor[walkIntoTileIndex] = TILE_DOOR_YELLOW_SIDE_OPEN; //change to top part of door open
                    let tileBelow = findTileBelowCurrent(walkIntoTileIndex);
                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_TREASURE_CHEST:
                sfx("sounds/pickup.mp3",0.25);
                treasure_chest_particles(this.x,this.y);
                this.keysHeld--; // one less key
                roomGrid.floor[walkIntoTileIndex] = TILE_TREASURE_CHEST_OPEN; 
                SetupPathfindingGridData(p1);
                document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                break;
            case TILE_KEY:
                sfx("sounds/key.mp3",0.5);
                // FIXME maybe use the key's position instead
                // pickup_key_sparkly_particles(this.x,this.y); 
                pickup_key_sparkly_particles(particleX,particleY);
                this.keysHeld++; // gain key
                document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                roomGrid.floor[walkIntoTileIndex] = TILE_EMPTY; // remove key
                SetupPathfindingGridData(p1);
                break;
            case TILE_SWORD:
                sfx("sounds/pickup.mp3",0.25);
                pickup_key_sparkly_particles(particleX,particleY);
                this.sword = true; // gain sword
                document.getElementById("debugText").innerHTML = "Sword! Spacebar to swing";
                roomGrid.floor[walkIntoTileIndex] = TILE_EMPTY; // remove sword
                SetupPathfindingGridData(p1);
                break;
            case TILE_SPIKE_2:
            case TILE_SPIKE_3:
            case TILE_SPIKE_4:
                    sfx("sounds/hurt.mp3",0.5);
                    this.hit(5);
                break;
            case TILE_WALL_1:
            case TILE_WALL_2:
            case TILE_WALL_3:
            case TILE_WALL_4:
            case TILE_WALL_5:
            case TILE_WALL_6:
            case TILE_WALL_7:
            case TILE_WALL_8:
            case TILE_WALL_9:
            case TILE_WALL_10:
            case TILE_WALL_11:
            case TILE_WALL_12:
            case TILE_WALL_13:
            default:
                // any other tile type number was found... do nothing, for now
                break;
                
        }



        if(attackPowerDelay<FRAMES_BETWEEN_ATTACK) {
            attackPowerDelay++;
            this.chargeAttackPower();
        }

        this.swingSword = function(){
            console.log("Player Swings Sword");
            let randy = Math.floor(Math.random()*4);
            sfx("sounds/sword_swing_"+randy+".wav",0.05); // FIXME: make them MP3s for smaller size?
            //we just set the flag here, logic is in the update function
            //and draw function
            this.swingSwordCooldown = this.SWING_SWORD_COOLDOWN;
        }

        if(this.x < 0) {
            
            if(getRoomTo(WEST) != "00"){
                this.x = GAME_WIDTH-10; // wrap around
                moveToRoom(WEST);
            }
        }
        if(this.x > GAME_WIDTH) {
            
            //mapMove(WEST);
            if(getRoomTo(EAST) != "00"){
                this.x = 10; // wrap around
                moveToRoom(EAST);
            }
        }
        if(this.y < 0) {
            
            //mapMove(NORTH);
            if(getRoomTo(NORTH) != "00"){
                this.y = GAME_HEIGHT-10; // wrap around
                moveToRoom(NORTH);
            }
        }
        if(this.y > GAME_HEIGHT) {
            
            //mapMove(SOUTH);
            if(getRoomTo(SOUTH) != "00"){
                this.y = 10; // wrap around
                moveToRoom(SOUTH);
            }
        }

	  if (this.moving) {
		this.lastMovedTime = Date.now();
	  }
      liveRoomGrid=[...roomGrid.floor]
    }

	this.cycleMovingAnimation = function() {
	  this.frameCount++;
	  if (this.frameCount > this.advanceFrameAmount) {
		this.frameCount = 0;
		if(this.spriteIndex < this.spriteNumberOfFrames-1) {
		  this.spriteIndex += 1;
		} else {
		  this.spriteIndex = 1;
		}
	  }
	};

  this.cycleIdleAnimation = function() {
	this.idleFrameCount++;
	  if (this.idleFrameCount > this.advanceFrameAmount) {
		this.idleFrameCount = 0;
		if(this.spriteIndex < this.spriteNumberOfIdleFrames-1) {
		  this.spriteIndex += 1;
		} else {
		  this.spriteIndex = 1;
		  this.lastMovedTime = Date.now();
		}
	  }
  };

  this.cycleDeathAnimation = function() {
	this.deathFrameCount++;
	  if (this.deathFrameCount > this.advanceFrameAmount) {
		this.deathFrameCount = 0;
		if(this.deathSpriteIndex < this.spriteNumberOfDeathFrames-1) {
			this.deathSpriteIndex += 1;
			this.spriteIndex = this.deathSpriteIndex;
		} else {
			this.finishedDeathAnimation = true;
		}
	  }
  };

    this.draw = function() {
        let currentBitMap = this.myBitmap;
        const isIdle = Date.now() - this.lastMovedTime > 2000;
		if (this.health <= 0) {
			currentBitMap = playerDeathPic;
			this.width = 73;
			this.swidth = 73;
			this.cycleDeathAnimation();
		} else if(this.moving){
        this.cycleMovingAnimation();
        } else if (isIdle) {
        currentBitMap = playerIdlePic;
        this.cycleIdleAnimation();
        } else {
        this.spriteIndex = 0;
        }

        // canvasContext.strokeStyle = "red";
        // canvasContext.strokeRect(this.swordRect.x, this.swordRect.y, this.swordRect.width, this.swordRect.height);

        if(this.sword && !isIdle && this.health > 0){
        this.sx = this.spriteIndex * this.width + 200; //move over to frames for sword
        } else {
        this.sx = this.spriteIndex * this.width; //this advances the frame for animation
        }
        //we swung the sword, cooldown is set
        if(this.swingSwordCooldown > 0){
        //draw swoosh based on player move direction, and set sword rect for collision
            switch(this.facing){
                case EAST:
                    canvasContext.drawImage(swordSwooshEastPic, this.x, this.y-20 );
                    this.swordRect = {x:this.x, y:this.y-20, width:swordSwooshEastPic.width, height:swordSwooshEastPic.height};
                    break;
                case WEST:
                    canvasContext.drawImage(swordSwooshWestPic, this.x-40, this.y-20 );
                    this.swordRect = {x:this.x-40, y:this.y-20, width:swordSwooshWestPic.width, height:swordSwooshWestPic.height};
                    break;
                case NORTH:
                    canvasContext.drawImage(swordSwooshNorthPic, this.x-40, this.y-30);
                    this.swordRect = {x:this.x-40, y:this.y-30, width:swordSwooshNorthPic.width, height:swordSwooshNorthPic.height};
                    break;
                case SOUTH:
                    canvasContext.drawImage(swordSwooshSouthPic, this.x-40, this.y+30);
                    this.swordRect = {x:this.x-40, y:this.y+30, width:swordSwooshSouthPic.width, height:swordSwooshSouthPic.height};
                    break;
                default:
                    break;
            }
            this.swingSwordCooldown--;
        } else{
            this.swordRect={x:0, y:0, width:0, height:0};
        } 
        if(this.hitCooldown > 0 && this.hitCooldown % 4 == 0){
        canvasContext.drawImage(characterShadow,0,0, this.swidth, this.sheight, Math.round(this.x - this.width/2+5), Math.round(this.y + this.height/2 - 10), 50, 51);
        canvasContext.drawImage(currentBitMap,this.sx,this.sy, this.swidth, this.sheight, Math.round(this.x - this.width/2), Math.round(this.y - this.height/2), 50, 51);
        }else if(this.hitCooldown <= 0){
        canvasContext.drawImage(characterShadow,0,0, this.swidth, this.sheight, Math.round(this.x - this.width/2+5), Math.round(this.y + this.height/2 - 10), 50, 51);
        canvasContext.drawImage(currentBitMap,this.sx,this.sy, this.swidth, this.sheight, Math.round(this.x - this.width/2), Math.round(this.y - this.height/2), 50, 51);
        }

    //  outlineRect(this.movingCollisionsX, this.movingCollisionsY, 5, 5, 'red');
    }

// calculate damage recieved and deduct from current health, trigger player death
    this.hit = function (damage) {
        // dodge?

        // damage reduction?

        // reduce health
        if(this.hitCooldown < 0){
            blood_particles(this.x, this.y);
            this.health -= damage * 4;
            this.hitCooldown = this.HIT_COOLDOWN;
        }

    }

    this.chargeAttackPower = function () {
        //toDO: if attackPowerDelay is not full return otherwise charge attack power and then decrease enemy health with the full amount
        if(attackPowerDelay<FRAMES_BETWEEN_ATTACK){
            return;
        } else {
            attackPowerDelay = 0;
        }
    }


} 