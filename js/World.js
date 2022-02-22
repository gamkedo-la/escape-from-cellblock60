const ROOM_COLS = 16;
const ROOM_ROWS = 9;

const TILE_W = 50;
const TILE_H = 50;

const WORLD_COLS=16;
const WORLD_ROWS=9;

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

worldPosition = {x: 8, y: 4};
worldGrid = [
// 00   01   02   03   04   05   06   07   08   09   10   11   12   13   14   15
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00", // 0 - 15
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00", // 16 - 31
  "00","00","00","00","00","00","00","00","02","00","00","00","00","00","00","00", // 32 - 47
  "00","00","00","00","00","00","00","00","10","07","00","00","00","00","00","00", // 48 - 63
  "00","00","00","00","00","00","00","03","01","05","00","00","00","00","00","00", // 64 - 79
  "00","00","00","00","00","00","00","00","09","11","00","00","00","00","00","00", // 80 - 95
  "00","00","00","00","00","00","00","00","04","00","00","00","00","00","00","00", // 96 - 111
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00", // 112 - 127
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00", // 128 - 143
];

var roomGrid = rooms[ worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x] ];

/**
 * this copies the roomGrid array into a new array
 * so we can track the state of animated tiles
 * and maybe other things?
 */
var liveRoomGrid = [...roomGrid.floor ];

/**
 * this variable is filled in while parsing the image list in imageLoading.js
 * -- if you mark a tile with "isWall: true" that tile code will be added to this 
 *    object with a value of true
 */
var wallTiles = {}

/**
 * Determines if the given tile is a wall tile
 * @param {*} tile 
 * @returns truthy
 */
function isWallTile(tile) {
  return wallTiles[tile];
}

function roomTileToIndex(tileCol, tileRow) {
  return (tileCol + ROOM_COLS*tileRow);
}

function getTileIndexAtPixelCoord(pixelX,pixelY) {
  var tileCol = pixelX / TILE_W;
  var tileRow = pixelY / TILE_H;
  
  // we'll use Math.floor to round down to the nearest whole number
  tileCol = Math.floor( tileCol );
  tileRow = Math.floor( tileRow );

  // first check whether the tile coords fall within valid bounds
  if(tileCol < 0 || tileCol >= ROOM_COLS ||
     tileRow < 0 || tileRow >= ROOM_ROWS) {
     document.getElementById("debugText").innerHTML = "out of bounds:"+pixelX+","+pixelY;
     return undefined;
  }
  
  var tileIndex = roomTileToIndex(tileCol, tileRow);
  return tileIndex;
}

function locationToRow(pixelY){
  var tileRow = pixelY / TILE_H;
  tileRow = Math.floor(tileRow);
  return;
}

function locationToCol(pixelX){
  var tileCol = pixelX / TILE_W;
  tileCol = Math.floor(tileCol);
  return;
}


function tileTypeHasTransparency(checkTileType) {
  return transparentTiles.includes(checkTileType);
}

function tileTypeWalkable(checkTileType){
  return walkableTiles.includes(checkTileType);
}

function tileTypeHasDungeonWallBottom(checkTileType){
  return (checkTileType == TILE_CABINET_1_TL ||
          checkTileType == TILE_CABINET_1_TR ||
          checkTileType == TILE_WHISKEY_BARREL_TOP);
}

function tileTypeHasTileFloor(checkTileType){
  return (checkTileType == TILE_POTTERY_1 );
}

function tileTypeHasDungeonWallTop(checkTileType){
  return (checkTileType == TILE_CABINET_1_TL ||
          checkTileType == TILE_CABINET_1_TR);
}

function findTileAboveCurrent(currentTile) {
  let tileAbove = currentTile - ROOM_COLS
  return tileAbove;
}

function findTileBelowCurrent(currentTile) {
  let tileBelow = currentTile + ROOM_COLS
  return tileBelow;
}

function drawLayer(layer) {
  var tileIndex = 0;
  var tileLeftEdgeX = 0;
  var tileTopEdgeY = 0;
  
  for(var eachRow=0; eachRow<ROOM_ROWS; eachRow++) { // deal with one row at a time
    
    tileLeftEdgeX = 0; // resetting horizontal draw position for tiles to left edge
    
    for(var eachCol=0; eachCol<ROOM_COLS; eachCol++) { // left to right in each row

      var tileTypeHere = layer[tileIndex]; // getting the tile code for this index
      if (tileTypeHere != TILE_EMPTY) { // don't do any drawing if there's nothing to draw
        let tile_sx = tilePics[tileTypeHere].imgX
        let tile_sy = tilePics[tileTypeHere].imgY;
        if( tileTypeHasTransparency(tileTypeHere) ) {
          canvasContext.drawImage(tilePics[TILE_GROUND].img, tileLeftEdgeX, tileTopEdgeY);
        }
        if( tileTypeHasDungeonWallBottom(tileTypeHere) ) {
          canvasContext.drawImage(tilePics[TILE_WALL_16].img,250,50, 50, 50, tileLeftEdgeX, tileTopEdgeY, 50, 50);
        }
        if( tileTypeHasDungeonWallTop(tileTypeHere) ) {
          canvasContext.drawImage(tilePics[TILE_WALL_16].img,tileLeftEdgeX, tileTopEdgeY);
        }

        if( tileTypeHasTileFloor(tileTypeHere) ) {
          canvasContext.drawImage(tilePics[TILE_FLOOR_TILE].img,0,0, 50, 50, tileLeftEdgeX, tileTopEdgeY, 50, 50);
        }

        if (animatedTiles.includes(tileTypeHere)) {
          // takes care of all animated tiles,
          // ensure the tileAnims object in tileData.js is updated
          // to include your new animated tile
          animateTile(eachCol, eachRow, tileAnims[tileTypeHere].frameRate, tileAnims[tileTypeHere].frames);
          if (tileAnims[tileTypeHere].drawParticles) tileAnims[tileTypeHere].drawParticles(tileLeftEdgeX, tileTopEdgeY)
        } else if (tileTypeHere==TILE_FLOOR_SLAB_1) {
          prngTile(eachCol, eachRow, [TILE_FLOOR_SLAB_1, TILE_FLOOR_SLAB_2, TILE_FLOOR_SLAB_3, TILE_FLOOR_SLAB_4]);
        } else if (tileTypeHere==TILE_FLOOR_CAVE_1) {
          prngTile(eachCol, eachRow, [TILE_FLOOR_CAVE_1, TILE_FLOOR_CAVE_2, TILE_FLOOR_CAVE_3, TILE_FLOOR_CAVE_4]);
        } else {
          canvasContext.drawImage(tilePics[tileTypeHere].img,tile_sx,tile_sy, 50, 50, tileLeftEdgeX, tileTopEdgeY, 50, 50);
        }
        
        // optionally draw some spooky eyes on the paintings
        if (tileTypeHere==TILE_DUNGEON_ART_4_BOTTOM) spookyEyes(tileLeftEdgeX+25,tileTopEdgeY+7,3);
        if (tileTypeHere==TILE_DUNGEON_ART_5_BOTTOM) spookyEyes(tileLeftEdgeX+18,tileTopEdgeY+2,4);
      }

      tileIndex++; // increment which index we're going to next check for in the room
      tileLeftEdgeX += TILE_W; // jump horizontal draw position to next tile over by tile width

    } // end of for eachCol
    
    tileTopEdgeY += TILE_H; // jump horizontal draw position down by one full tile height
    
  } // end of for eachRow    
} // end of drawLayer()

function moveToRoom(DIRECTION) {
  // move to a new room
  console.log(`moveToRoom() called with direction ${DIRECTION}`);
  switch(DIRECTION) {
    case NORTH:
       worldPosition.y -=1;
        break;
    case SOUTH:
        worldPosition.y +=1;
        break;
    case EAST:
        worldPosition.x +=1;
        break;
    case WEST:
        worldPosition.x -=1;
        break;
  }
  currentRoomId =  worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x]
  roomGrid = rooms[ currentRoomId ]
  addEnemies();
  particles.clear();
 // if()
 document.getElementById("debugText").innerHTML += `\n current room: ${currentRoomId}`;``
  liveRoomGrid = [...roomGrid.floor];
  
}

function getRoomTo(DIRECTION) {
  // get the room to the north, south, east, or west of the current room
  switch(DIRECTION) {
    case NORTH:
      console.log(`getRoomTo() called with direction ${DIRECTION}; GridPos: ${(worldPosition.y-1)*WORLD_COLS + worldPosition.x}; result: ${worldGrid[(worldPosition.y-1)*WORLD_COLS + worldPosition.x]}`); 
       return worldGrid[(worldPosition.y-1)*WORLD_COLS + worldPosition.x];
    case SOUTH:
      console.log(`getRoomTo() called with direction ${DIRECTION}; GridPos: ${(worldPosition.y+1)*WORLD_COLS + worldPosition.x}; result: ${worldGrid[(worldPosition.y+1)*WORLD_COLS + worldPosition.x]}`);
        return worldGrid[(worldPosition.y+1)*WORLD_COLS + worldPosition.x];
    case EAST:
      console.log(`getRoomTo() called with direction ${DIRECTION}; GridPos: ${worldPosition.y*WORLD_COLS + worldPosition.x+1}; result: ${worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x+1]}`); 
        return worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x+1];
    case WEST:
      console.log(`getRoomTo() called with direction ${DIRECTION}; GridPos: ${worldPosition.y*WORLD_COLS + worldPosition.x-1}; result: ${worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x-1]}`); 
        return worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x-1];
  }
}

function worldWrap(DIRECTION) {
  switch(DIRECTION) {
    case SOUTH:
      if (worldGrid[(worldPosition.y+ROOM_ROWS)*WORLD_COLS + worldPosition.x] !== "00") {
        return worldGrid[(worldPosition.y+ROOM_ROWS)*WORLD_COLS + worldPosition.x];
      }
      break;
    case NORTH:
        if (worldGrid[(worldPosition.y-ROOM_ROWS)*WORLD_COLS + worldPosition.x] !== "00") {
          return worldGrid[(worldPosition.y-ROOM_ROWS)*WORLD_COLS + worldPosition.x];
        }
        break;
    case WEST:
        if (worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x-ROOM_COLS] !== "00") {
          return worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x-ROOM_COLS];
        }
        break;
    case EAST:
        if (worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x+ROOM_COLS] !== "00") {
          return worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x+ROOM_COLS];
        }
        break;
  }
}

function addEnemies() {
  for(var i = 0; i < roomGrid.floor.length; i++){
    if(roomGrid.floor[i] == TILE_ENEMY){
            addGhost(currentRoomId);
    } 
    if(roomGrid.floor[i] == TILE_OCTOGOLEM){
            addOctoGolem(currentRoomId);
    } 
    if(roomGrid.floor[i] == TILE_SKELETON){
      addSkeleton(currentRoomId);
}
  }
}

function drawTileAtlas(drawText) {
  //checkerboard(8, '#111111', '#222222');
  canvas.width = GAME_WIDTH;
  //draw the 'zero' tile with a very transparent magenta
  colorRect(0,0, 50,50 , 'rgba(255,0,255,0.1)');
  //draw the player at indice 2
  canvasContext.drawImage(playerPic, 0, 0, 50, 50, 2%16*50, Math.floor(2/16)*50, 50, 50);
  //draw enemy sprite at indice 30
  canvasContext.drawImage(ghostPic, 0, 0, 50, 50, 30%16*50, Math.floor(30/16)*50, 50, 50);

  Object.entries(TILES).forEach( function(entry) {
    
    let tilename = entry[0];
    let mapIndex = entry[1];

    if(tilePics[mapIndex] != undefined){
      sx = tilePics[mapIndex].imgX
      sy = tilePics[mapIndex].imgY;
      canvasContext.drawImage(tilePics[mapIndex].img, sx, sy, 50, 50, mapIndex%16*50, Math.floor(mapIndex/16)*50, 50, 50);
      //only draw numbers if drawText is true
      if(drawText){ 
        shadowText(mapIndex.toString(), mapIndex%16*50+4, (Math.floor(mapIndex/16)*50)+15, 15, 1, "white", "black");
      }
    }
  })
  var dataURL = canvas.toDataURL("image/png");
  //var window = window.open();
  var img = new Image();
  img.src = dataURL;
  document.getElementById("atlas").append(img);

}