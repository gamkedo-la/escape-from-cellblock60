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
		};
		this.animationFrameCount = 0;
		this.currentAnimationFrameIndex = 0;
		this.currentAnimation = this.animations.default;
        this.init(ghostPic, "red");
    }

    draw(){
		this.animate();
        super.draw();
        if(this.roomId != currentRoomId){ return };
        ghost_wisp(this.x+15, this.y+50);
    }

	animate() {
		this.animationFrameCount++;
		if (this.animationFrameCount > ghost.advanceAnimationFrameAmount) {
			this.currentAnimationFrameIndex++;
			if (this.currentAnimationFrameIndex >= this.currentAnimation.frames.length) {
				this.currentAnimationFrameIndex = 0;
				if (!this.currentAnimation.loop) {
					this.currentAnimation = this.animations[this.currentAnimation.nextAnimation];
				}
			}
			this.animationFrameCount = 0;
		}
		const frame = this.currentAnimation.frames[this.currentAnimationFrameIndex];
		this.sx =  frame * this.swidth;
	}

	onStateChange(state) {
		switch (state) {
		case "tracking":
			this.currentAnimation = this.animations.startTracking;
			break;
		default:
			this.currentAnimation = this.animations.default;
		}
	}
}
