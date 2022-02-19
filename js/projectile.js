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
	this.swidth = 10;
	this.sheight = 10;
	this.particleX = 0;
	this.particleY= 0;
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
			this.particleX = this.xv;
			this.particleY = this.yv;
		} else if (shipFiring.move_East){
			this.xv = PROJECTILE_SPEED;
			this.yv = 0;
			this.particleX = this.xv;
			this.particleY = this.yv;
		} else if (shipFiring.move_South){
			this.xv = 0;
			this.yv = PROJECTILE_SPEED;
			this.particleX = this.xv+5;
			this.particleY = this.yv;
		} else if (shipFiring.move_West){
			this.xv = -PROJECTILE_SPEED
			this.yv = 0;
			this.particleX = this.xv;
			this.particleY = this.yv;
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

		if(p1.checkForCollision(this.x, this.y)){
			p1.hit(5);
			blood_particles(p1.x, p1.y);
			this.projectileLife = -1;
		}

		if(this.projectileLife <= 0){
			this.readyToRemove = true;
		}
	}	
	
	this.draw = function(){
		canvasContext.drawImage(this.myBitmap,this.sx,this.sy, this.swidth, this.sheight, this.x, this.y, 15, 15);
		projectile_particle(this.x, this.y);
	}
}