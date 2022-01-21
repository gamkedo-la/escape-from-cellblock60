// support to animate a tile

/**
 * animate a tile at given row/column
 * @param {*} i - column index
 * @param {*} j - row index
 * @param {*} frameRate - ticks per frame
 * @param {*} frames - array of tile types representing animation frames
 */
function animateTile(i,j, frameRate, frames) {
    // determine local frame index
    // -- frameIndex is global frame index set in Main.js
    // -- global frame index is divided by frameRate, so that we will only change the local frame index once every X number of frames where X is the frameRate value
    // -- value is mixed w/ value computed from row/value, so that all instances of an animation should not be synced
    let idx = Math.floor(frameIndex/frameRate) + 64*j + i;
    // -- take computed index and mod by the actual number of frames
    idx = idx % frames.length;
    // -- then look up the frame for that index
    let which = frames[idx];
    let x = i*TILE_W;
    let y = j*TILE_H;
    let sx = tilePics[which].imgX
    let sy = tilePics[which].imgY;
    // draw at position given
    canvasContext.drawImage(tilePics[which].img, sx, sy, 50, 50, x, y, 50, 50);

}