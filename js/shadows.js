let shadowCache = {};

let shadow = {
    tl: 1,
    t: 2,
    tr: 3,
    l: 4,
    r: 5,
    bl: 6,
    b: 7,
    br: 8,
    mbr: 9,
    mbl: 10,
    mtr: 11,
    mtl: 12,
}

let offsets = {
    [shadow.tl]: { x: 0, y: 0 },
    [shadow.t]: { x: 25, y: 0 },
    [shadow.tr]: { x: 175, y: 0 },
    [shadow.l]: { x: 0, y: 25 },
    [shadow.r]: { x: 175, y: 25 },
    [shadow.bl]: { x: 0, y: 175 },
    [shadow.b]: { x: 25, y: 175 },
    [shadow.br]: { x: 175, y: 175 },
    [shadow.mbr]: { x: 75, y: 75 },
    [shadow.mbl]: { x: 100, y: 75 },
    [shadow.mtr]: { x: 75, y: 100 },
    [shadow.mtl]: { x: 100, y: 100 },
}

function idxAbove(idx) {
    if (idx === -1) return -1;
    if (idx > ROOM_COLS) {
        return idx - ROOM_COLS;
    } else {
        return -1;
    }
}

function idxBelow(idx) {
    if (idx === -1) return -1;
    if (idx < ROOM_COLS*(ROOM_ROWS-1)) {
        return idx + ROOM_COLS;
    } else {
        return -1;
    }
}

function idxLeft(idx) {
    if (idx === -1) return -1;
    if ((idx % ROOM_COLS) > 0) {
        return idx - 1;
    } else {
        return -1;
    }
}

function idxRight(idx) {
    if (idx === -1) return -1;
    if ((idx % ROOM_COLS) < ROOM_COLS - 1) {
        return idx + 1;
    } else {
        return -1;
    }
}

function tileAtIdx(data, idx) {
    if (idx !== -1) {
        return data[idx];
    }
    return 0;
}

function generateShadows(lvl, bg, fg) {
    let shadows = new Array(bg.length*4);
    for (let j=0; j<ROOM_ROWS; j++) {
        for (let i=0; i<ROOM_COLS; i++) {
            let idx = ROOM_COLS*j + i;
            let sidx = ROOM_COLS*j*4 + i*2;
            // -- FIXME: currently walls show up in the background
            let layer = bg;
            // is the foreground tile is a wall tile, skip
            if (isWallTile(tileAtIdx(layer, idx))) continue;
            // otherwise, tile is not a wall, fill in shadows
            // top left shadow
            if (isWallTile(tileAtIdx(layer, idxLeft(idx))) && isWallTile(tileAtIdx(layer, idxAbove(idx)))) {
                shadows[sidx] = shadow.tl;
            } else if (isWallTile(tileAtIdx(layer, idxLeft(idx)))) {
                shadows[sidx] = shadow.l;
            } else if (isWallTile(tileAtIdx(layer, idxAbove(idx)))) {
                shadows[sidx] = shadow.t;
            } else if (isWallTile(tileAtIdx(layer, idxLeft(idxAbove(idx))))) {
                shadows[sidx] = shadow.mtl;
            }
            // top right shadow
            if (isWallTile(tileAtIdx(layer, idxRight(idx))) && isWallTile(tileAtIdx(layer, idxAbove(idx)))) {
                shadows[sidx+1] = shadow.tr;
            } else if (isWallTile(tileAtIdx(layer, idxRight(idx)))) {
                shadows[sidx+1] = shadow.r;
            } else if (isWallTile(tileAtIdx(layer, idxAbove(idx)))) {
                shadows[sidx+1] = shadow.t;
            } else if (isWallTile(tileAtIdx(layer, idxRight(idxAbove(idx))))) {
                shadows[sidx+1] = shadow.mtr;
            }
            // bottom left shadow
            if (isWallTile(tileAtIdx(layer, idxLeft(idx))) && isWallTile(tileAtIdx(layer, idxBelow(idx)))) {
                shadows[sidx+ROOM_COLS*2] = shadow.bl;
            } else if (isWallTile(tileAtIdx(layer, idxLeft(idx)))) {
                shadows[sidx+ROOM_COLS*2] = shadow.l;
            } else if (isWallTile(tileAtIdx(layer, idxBelow(idx)))) {
                shadows[sidx+ROOM_COLS*2] = shadow.b;
            } else if (isWallTile(tileAtIdx(layer, idxLeft(idxBelow(idx))))) {
                shadows[sidx+ROOM_COLS*2] = shadow.mbl;
            }
            // bottom right shadow
            if (isWallTile(tileAtIdx(layer, idxRight(idx))) && isWallTile(tileAtIdx(layer, idxBelow(idx)))) {
                shadows[sidx+ROOM_COLS*2+1] = shadow.br;
            } else if (isWallTile(tileAtIdx(layer, idxRight(idx)))) {
                shadows[sidx+ROOM_COLS*2+1] = shadow.r;
            } else if (isWallTile(tileAtIdx(layer, idxBelow(idx)))) {
                shadows[sidx+ROOM_COLS*2+1] = shadow.b;
            } else if (isWallTile(tileAtIdx(layer, idxRight(idxBelow(idx))))) {
                shadows[sidx+ROOM_COLS*2+1] = shadow.mbr;
            }
        }
    }
    // cache shadows for lvl
    shadowCache[lvl] = shadows;
}

function drawShadows(lvl, bg, fg) {
    // load from cache...
    let shadows = shadowCache[lvl];
    if (!shadows) {
        generateShadows(lvl, bg, fg);
        shadows = shadowCache[lvl];
    }

    // render shadows
    for (let j=0; j<ROOM_ROWS*2; j++) {
        for (let i=0; i<ROOM_COLS*2; i++) {
            let idx = ROOM_COLS*j*2 + i;
            if (!shadows[idx]) continue;
            canvasContext.drawImage(shadowPic, offsets[shadows[idx]].x, offsets[shadows[idx]].y, 25, 25, i*25, j*25, 25, 25);
        }
    }
}