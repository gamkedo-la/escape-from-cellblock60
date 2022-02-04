// a very simple particle system

const PARTICLES_ENABLED = true; // if false, no particles at all

var particles = new particleSystem(); 

function particleSystem() {
    var particle = [];
    this.add = function (x, y, sprite, life, size, rotationSpeed, forcedAngle, velX, velY, myAlpha) {
        if (!PARTICLES_ENABLED) return;
        var p, pnum, pcount;
        if (velX == undefined) velX = 0;
        if (velY == undefined) velY = 0;
        if (myAlpha == undefined) myAlpha = 1;
        if (rotationSpeed == undefined) rotationSpeed = Math.random() * 3 - 2;
        if (forcedAngle == undefined) forcedAngle = 0;
        for (pnum = 0, pcount = particle.length; pnum < pcount; pnum++) {
            p = particle[pnum];
            if (p && p.inactive) { break; } // found one we can reuse
        }
        if (!p || !p.inactive) { // we need a new one
            var newParticle = { inactive: true };
            particle.push(newParticle);
            p = newParticle;
        }
        if (p && p.inactive) { // reuse an old one
            p.x = x;
            p.y = y;
            p.inactive = false;
            p.sprite = sprite;
            p.size = size;
            p.life = life;
            p.birth = (new Date()).getTime();
            p.death = p.birth + life;
            p.angle = forcedAngle;
            p.alpha = myAlpha;
            p.maxalpha = myAlpha;
            p.rotSpd = rotationSpeed;
            p.velX = velX;
            p.velY = velY;
        }
    }

    this.update = function () {
        if (!PARTICLES_ENABLED) return;
        var timestamp = (new Date()).getTime();
        particle.forEach(
            function (p) {
                if (!p.inactive) {
                    p.age = timestamp - p.birth;
                    var lifePercent = (p.age / p.life);
                    if (lifePercent > 1) lifePercent = 1;
                    if (lifePercent < 0) lifePercent = 0;
                    p.x += p.velX; // move
                    p.y += p.velY;
                    p.velX *= 0.94; // slow down
                    p.velY *= 0.94;
                    p.scale = p.size * lifePercent; // grow
                    p.alpha = (1 - lifePercent) * p.maxalpha; // fade
                    p.angle = Math.PI * 2 * lifePercent * p.rotSpd;
                    if (timestamp >= p.death) p.inactive = true;
                }
            });
    }

    this.draw = function () {
        if (!PARTICLES_ENABLED) return;
        particle.forEach(
            function (p) {
                if (!p.inactive) {
                    drawImageRotatedAlpha(canvasContext,p.sprite,p.x,p.y,p.angle,p.alpha);
                }
            }
        );
    }

    // immediately clears all particles
    this.clear = function () { particle = []; }
};

// helper function (inclusive: eg 1,10 may include 1 or 10)
function randomInt(min,max) { return Math.floor(Math.random()*(max-min+1))+min; }

// custom stuff for this game:
function torch_particles(x, y) {
    var num = randomInt(0,1); // sometimes adds none
    for (var i = 0; i < num; i++) {
        let life = randomInt(333,777);
        let size = randomInt(1,4);
        let rotspd = Math.random()*0.3-0.15;
        let ang = 0;
        let velx = Math.random()*3-1.5;
        let vely = Math.random()*-1.5;
        let alpha = 0.5;
        particles.add(x,y,smokePic,life,size,rotspd,ang,velx,vely,alpha);
    }
}
