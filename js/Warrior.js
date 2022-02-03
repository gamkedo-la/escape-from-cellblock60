// tuning constants
const PLAYER_MOVE_SPEED = 4.0;
const FRAMES_BETWEEN_ATTACK = 100;

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

    // Sprite variables
    this.sx = 0; //sprite xCoord to start clipping
    this.sy = 0; //sprite yCoord to start clipping
    this.swidth = 50; //sprite width of image to be drawn
    this.sheight = 51; //sprite height to be drawn
    this.sframes = 0; //frames total per animation
    this.width = 50; //width of image
    this.height = 51; //height of image
    this.frameCount = 0; //counting the Game FPS for this character
    this.advanceFrameAmount = 5; //advance frame (this example: 12 times a second)
    this.spriteNumberOfFrames = 5; // this represents 4 frames of walking
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

    // key controls used for this
    this.setupControls = function(northKey, eastKey, southKey, westKey) {
        this.controlKeyForNorth = northKey;
        this.controlKeyForEast = eastKey;
        this.controlKeyForSouth = southKey;
        this.controlKeyForWest = westKey;
    }

    this.init = function(whichGraphic, whichName) {
        this.myBitmap = whichGraphic;
        this.myName = whichName;
        this.health = this.fullHealth;
        this.sword = false;
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
                    roomGrid.floor[i] = TILE_GROUND;
                    break; // found it, so no need to keep searching 
                } // end of if
            } // end of for
        } // end of if position not saved yet

        this.x = this.homeX;
        this.y = this.homeY;

    } // end of reset

    this.move = function() {

        if (this.health <= 0) {
            gameState = STATE_GAME_OVER;
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
        } else if (this.keyHeld_East) {
            nextX += PLAYER_MOVE_SPEED; 
            this.sy = this.sheight*2;
            this.moving = true;
            this.movingCollisionsX = nextX + (this.width/4)
        } else if (this.keyHeld_South) {
            nextY += PLAYER_MOVE_SPEED;
            this.sy = 0;
            this.moving = true;
            this.movingCollisionsY = nextY + (this.height/2)
        } else if (this.keyHeld_West) {
            nextX -= PLAYER_MOVE_SPEED;
            this.sy = this.sheight*3;
            this.moving = true;
            this.movingCollisionsX = nextX - (this.width/4)
        } else {
         //   this.moving = false;
        }


        var walkIntoTileIndex = getTileIndexAtPixelCoord(this.movingCollisionsX, this.movingCollisionsY);
        var walkIntoTileType = TILE_EMPTY; //TILE_WALL_7;

        if (walkIntoTileIndex != undefined) {
            walkIntoTileType = roomGrid.floor[walkIntoTileIndex];
        }

        if(tileTypeWalkable(walkIntoTileType)){
            this.x = nextX;
            this.y = nextY;
        } else switch (walkIntoTileType) {
            case TILE_GOAL:
                this.reset();
                break;
            case TILE_DOOR:
            case TILE_DOOR_YELLOW_FRONT_BOTTOM:
                if (this.keysHeld > 0) {
                    this.keysHeld--; // one less key
                    roomGrid.floor[walkIntoTileIndex] = TILE_GROUND; //change to bottom part of door open
                    let tileAbove = findTileAboveCurrent(walkIntoTileIndex);
                    roomGrid.floor[tileAbove] = TILE_GROUND;
                    roomGrid.ceiling[tileAbove] = TILE_EMPTY; // change to top part of door open
                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_DOOR_YELLOW_FRONT_TOP:
                if (this.keysHeld > 0) {
                    this.keysHeld--; // one less key
                    roomGrid.floor[walkIntoTileIndex] = TILE_GROUND; //change to top part of door open
                    let tileBelow = findTileBelowCurrent(walkIntoTileIndex);
                    roomGrid.floor[tileBelow] = TILE_GROUND; // change to bottom part of door open
                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_PRISON_GATE_BOTTOM:
                if (this.keysHeld > 0) {
                    this.keysHeld--; // one less key
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
                    roomGrid.floor[walkIntoTileIndex] = TILE_DOOR_YELLOW_SIDE_OPEN; //change to top part of door open
                    let tileBelow = findTileBelowCurrent(walkIntoTileIndex);
                    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                    SetupPathfindingGridData(p1);
                }
                break;
            case TILE_TREASURE_CHEST:
                this.keysHeld--; // one less key
                roomGrid.floor[walkIntoTileIndex] = TILE_TREASURE_CHEST_OPEN; 
                SetupPathfindingGridData(p1);
                document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                break;
            case TILE_KEY:
                this.keysHeld++; // gain key
                document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
                roomGrid.floor[walkIntoTileIndex] = TILE_GROUND; // remove key
                SetupPathfindingGridData(p1);
                break;
            case TILE_SWORD:
                this.sword = true; // gain sword
                document.getElementById("debugText").innerHTML = "Sword: " + this.sword;
                roomGrid.floor[walkIntoTileIndex] = TILE_GROUND; // remove sword
                SetupPathfindingGridData(p1);
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

    }

    this.draw = function() {
      if(this.moving){
		this.frameCount++;
		if (this.frameCount > this.advanceFrameAmount) {
			this.frameCount = 0;
			if(this.spriteIndex < this.spriteNumberOfFrames-1) {
				this.spriteIndex += 1;
			} else {
				this.spriteIndex = 1;
			}
        }
      } else {
        this.spriteIndex = 0;
      }

      if(this.sword){
        this.sx = this.spriteIndex * this.width + 200; //move over to frames for sword
      } else {
        this.sx = this.spriteIndex * this.width; //this advances the frame for animation
      }
      canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, Math.round(this.x - this.width/2), Math.round(this.y - this.height/2), 50, 51);
      outlineRect(this.movingCollisionsX, this.movingCollisionsY, 5, 5, 'red');
    }

    // calculate damage recieved and deduct from current health, trigger player death
    this.hit = function (damage) {
        // dodge?

        // damage reduction?

        // reduce health
        this.health -= damage;

       
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