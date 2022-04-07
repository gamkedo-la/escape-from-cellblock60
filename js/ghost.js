function addGhost(roomId){
    tempghost = new ghost(roomId);
    enemyList.push(tempghost);
}

class ghost extends enemy {
	static advanceAnimationFrameAmount = 2;
    constructor(roomId){
        super(roomId);
		this.animations = {
			default: {loop: true, frames: [0]},
			startTracking: {loop: false, frames: [1, 2, 3], nextAnimation: "tracking"},
			tracking: {loop: true, frames: [3]},
			dying: {loop: false, frames: [4, 5, 6, 7], whenDone: enemy => enemy.dead = true},
		};
		this.animationFrameCount = 0;
		this.currentAnimationFrameIndex = 0;
		this.currentAnimation = this.animations.default;
        this.init(ghostPic, "red");
		//attacking abilities
		this.enemyCanRam = false;
		this.enemyCanMelee = false;
		this.usesPoleArm = false;
		this.dying = false;
    }

	move() {
		if (this.dying) {
			return;
		}
		super.move();
	}

    draw(){
		this.animate();
        super.draw();
        if(this.roomId != currentRoomId){ return };
        ghost_wisp(this.x+15, this.y+50);
    }

	hit(damage) {
		if (this.dying) {
			return;
		}
		const wasAlive = !this.dead;
		super.hit(damage);
		if (wasAlive && this.dead) {
			this.dying = true;
			this.dead = false; // prevent pruning to run death animation, this.dead will be true when dying animation finishes
			this.onStateChange("dying");
		}
	}

	animate() {
		this.animationFrameCount++;
		if (this.animationFrameCount > ghost.advanceAnimationFrameAmount) {
			this.currentAnimationFrameIndex++;
			if (this.currentAnimationFrameIndex >= this.currentAnimation.frames.length) {
				this.currentAnimationFrameIndex = 0;
				if (!this.currentAnimation.loop) {
					if (typeof this.currentAnimation.whenDone === "function") {
						this.currentAnimation.whenDone(this);
					}
					this.currentAnimation = this.animations[this.currentAnimation.nextAnimation || this.animations.default];
				}
			}
			this.animationFrameCount = 0;
		}
		if (!this.dead) {
			const frame = this.currentAnimation.frames[this.currentAnimationFrameIndex];
			this.sx =  frame * this.swidth;
		}
	}

	onStateChange(state) {
		switch (state) {
		case "tracking":
			this.currentAnimation = this.animations.startTracking;
			break;
		case "dying":
			this.currentAnimation = this.animations.dying;
			break;
		default:
			this.currentAnimation = this.animations.default;
		}
	}
}
