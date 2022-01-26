const PROJECTILE_SPEED = 6.0;
const PROJECTILE_LIFE = 100;
const PROJECTILE_DISPLAY_RADIUS = 5;
var missProjectile = -10;

//ProjectTileClass.prototype = new movingWrapPositionClass();

function ProjectileClass(){
	this.x;
	this.y;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 5;
	this.sheight = 5;
	this.readyToRemove = false;
	this.myBitmap = projectilePic;
		
	this.isProjectileReadyToFire = function(){
		return (this.projectileLife <= 0);
	}
	
	this.shootFrom = function(shipFiring){
		this.x = shipFiring.projectileX;
		this.y = shipFiring.projectileY;
		
		if(shipFiring.move_North){
			this.xv = 0;
			this.yv = -PROJECTILE_SPEED;
		} else if (shipFiring.move_East){
			this.xv = PROJECTILE_SPEED;
			this.yv = 0;
		} else if (shipFiring.move_South){
			this.xv = 0;
			this.yv = PROJECTILE_SPEED
		} else if (shipFiring.move_West){
			this.xv = -PROJECTILE_SPEED
			this.yv = 0;
		}
		
		this.projectileLife = PROJECTILE_LIFE;
	}
	
	//this.superclassMove = this.movement;  // saves a reference to the parent class's move
	this.move = function() {
		this.projectileLife--;
		this.x += this.xv;
		this.y += this.yv;
		var walkIntoTileIndex = getTileIndexAtPixelCoord(this.x, this.y);
        var walkIntoTileType = TILE_WALL_7;

        if (walkIntoTileIndex != undefined) {
            walkIntoTileType = roomGrid.floor[walkIntoTileIndex];
        }
		if(tileTypeWalkable(walkIntoTileType) == false){
			this.readyToRemove = true;
        } 
		if(this.projectileLife <= 0){
			this.readyToRemove = true;
		}
	}	
	
	this.draw = function(){
		//colorCircle(this.x, this.y, PROJECTILE_DISPLAY_RADIUS, 'white')
		canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y, 5, 5);
	}
}