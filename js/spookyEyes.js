// tiny little eyes on paintings
// that look at the player! spooooooky

function spookyEyes(x,y,eysOffset=3) {
    const moveSizeX = 2;
    const moveSizeY = 2;
    const centerPlayerX = 15;
    const centerPlayerY = 15;
    let lookAngle = Math.atan2(p1.y-y+centerPlayerY,p1.x-x+centerPlayerX);
    x += Math.round(Math.cos(lookAngle)*moveSizeX);
    y += Math.ceil(Math.sin(lookAngle)*moveSizeY);
    canvasContext.drawImage(spookyEye,x+eysOffset,y);
    canvasContext.drawImage(spookyEye,x-eysOffset,y);
}