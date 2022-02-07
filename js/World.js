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
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","00","02","00","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","05","01","05","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","00","05","11","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00",
  "00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00",
];

var roomGrid = rooms[ worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x] ];

TILES = {

  TILE_EMPTY: 0,
  TILE_GROUND: 1,
  TILE_PLAYER: 2,
  TILE_GOAL: 3,
  TILE_DOOR: 5,
  TILE_WALL_1: 6,
  TILE_WALL_2: 7,
  TILE_WALL_3: 8,
  TILE_WALL_4: 9,
  TILE_WALL_5: 10,
  TILE_WALL_6: 11,
  TILE_WALL_7: 12,
  TILE_WALL_8: 13,
  TILE_WALL_9: 14,
  TILE_WALL_10: 15,
  TILE_WALL_11: 16,
  TILE_WALL_12: 17,
  TILE_WALL_13: 18,
  TILE_WALL_14: 20,
  TILE_WALL_15: 21,
  TILE_WALL_16: 23,
  TILE_KEY: 4,
  TILE_DOOR_YELLOW_FRONT_TOP: 19,
  TILE_DOOR_YELLOW_FRONT_BOTTOM: 22,
  TILE_DOOR_YELLOW_FRONT_TOP_OPEN: 24,
  TILE_DOOR_YELLOW_FRONT_BOTTOM_OPEN: 25,
  TILE_ENEMY: 30,
  TILE_PRISON_WALL_1: 31,
  TILE_PRISON_WALL_2: 32,
  TILE_PRISON_WALL_3: 33,
  TILE_PRISON_WALL_4: 34,
  TILE_PRISON_WALL_5: 35,
  TILE_PRISON_GATE_TOP: 36,
  TILE_PRISON_GATE_BOTTOM: 37,
  TILE_PRISON_GATE_TOP_OPEN: 38,
  TILE_PRISON_GATE_BOTTOM_OPEN: 39,
  TILE_DUNGEON_STAIRS_TOP_1: 40,
  TILE_DUNGEON_STAIRS_MIDDLE_1: 41,
  TILE_DUNGEON_STAIRS_BOTTOM_1: 42,
  TILE_CABINET_1_TL: 43,
  TILE_CABINET_1_TR: 44,
  TILE_CABINET_1_BL: 45,
  TILE_CABINET_1_BR: 46,
  TILE_WHISKEY_BARREL_TOP: 47,
  TILE_WHISKEY_BARREL_BOTTOM: 48,
  TILE_CABINET_1_ML: 49,
  TILE_CABINET_1_MR: 50,
  TILE_TREASURE_CHEST: 51,
  TILE_TREASURE_CHEST_OPEN: 52,
  TILE_DOOR_YELLOW_SIDE_CLOSED: 53,
  TILE_DOOR_YELLOW_SIDE_OPEN: 54,
  TILE_DUNGEON_ART_1_TOP: 55,
  TILE_DUNGEON_ART_1_BOTTOM: 56,
  TILE_DUNGEON_ART_2_TOP: 57,
  TILE_DUNGEON_ART_2_BOTTOM: 58,
  TILE_DUNGEON_ART_3_TOP: 59,
  TILE_DUNGEON_ART_3_BOTTOM: 60,
  TILE_DUNGEON_ART_4_TOP: 61,
  TILE_DUNGEON_ART_4_BOTTOM: 62,
  TILE_DUNGEON_ART_5_TOP: 63,
  TILE_DUNGEON_ART_5_BOTTOM: 64,
  TILE_TORCH_1: 65,
  TILE_TORCH_2: 66,
  TILE_TORCH_3: 67,
  TILE_TORCH_4: 68,
  TILE_TORCH_1_BOTTOM: 69,

  TILE_FLOOR_TILE: 70,
  TILE_FLOOR_WOOD: 71,
  TILE_FLOOR_SLAB_1: 72,
  TILE_FLOOR_SLAB_2: 73,
  TILE_FLOOR_SLAB_3: 74,
  TILE_FLOOR_SLAB_4: 75,
  TILE_SPIKE_1: 76,
  TILE_SPIKE_2: 77,
  TILE_SPIKE_3: 78,
  TILE_SPIKE_4: 79,
  TILE_TABLE_LEFT: 80,
  TILE_TABLE_RIGHT: 81,

  TILE_SWORD: 82
  
};

for(const [key, value] of Object.entries(TILES)) {
  window[key] = value;
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
  return (checkTileType == TILE_GOAL ||
          checkTileType == TILE_KEY ||
          checkTileType == TILE_SWORD ||
          checkTileType == TILE_PRISON_WALL_1 ||
          checkTileType == TILE_PRISON_WALL_2 ||
          checkTileType == TILE_PRISON_WALL_3 ||
          checkTileType == TILE_PRISON_GATE_TOP ||
          checkTileType == TILE_PRISON_GATE_BOTTOM ||
          checkTileType == TILE_PRISON_GATE_TOP_OPEN ||
          checkTileType == TILE_PRISON_GATE_BOTTOM_OPEN ||
		      checkTileType == TILE_DOOR_YELLOW_FRONT_BOTTOM ||
          checkTileType == TILE_DOOR_YELLOW_FRONT_TOP ||
          checkTileType == TILE_DOOR_YELLOW_FRONT_BOTTOM_OPEN ||
          checkTileType == TILE_DOOR_YELLOW_FRONT_TOP_OPEN ||
          checkTileType == TILE_WHISKEY_BARREL_BOTTOM ||
          checkTileType == TILE_CABINET_1_BL ||
          checkTileType == TILE_CABINET_1_BR ||
          checkTileType == TILE_TREASURE_CHEST ||
          checkTileType == TILE_TREASURE_CHEST_OPEN ||
          checkTileType == TILE_DOOR ||
          checkTileType == TILE_TABLE_LEFT ||
          checkTileType == TILE_TABLE_RIGHT);
}

function tileTypeWalkable(checkTileType){
  return(checkTileType == TILE_EMPTY ||
    checkTileType == TILE_GROUND ||
    checkTileType == TILE_DOOR_YELLOW_FRONT_TOP_OPEN ||
    checkTileType == TILE_DOOR_YELLOW_FRONT_BOTTOM_OPEN ||
    checkTileType == TILE_PRISON_GATE_TOP_OPEN ||
    checkTileType == TILE_PRISON_GATE_BOTTOM_OPEN ||
    checkTileType == TILE_DOOR_YELLOW_SIDE_OPEN ||
    checkTileType == TILE_FLOOR_SLAB_1 ||
    checkTileType == TILE_FLOOR_TILE ||
    checkTileType == TILE_FLOOR_WOOD
  );
}

function tileTypeHasDungeonWallBottom(checkTileType){
  return (checkTileType == TILE_CABINET_1_TL ||
          checkTileType == TILE_CABINET_1_TR ||
          checkTileType == TILE_WHISKEY_BARREL_TOP);
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
          canvasContext.drawImage(tilePics[TILE_WALL_16].img,350,0, 50, 50, tileLeftEdgeX, tileTopEdgeY, 50, 50);
        }
  
        if (tileTypeHere==TILE_TORCH_1) {
          
          animateTile(eachCol, eachRow, 5, [TILE_TORCH_1, TILE_TORCH_2, TILE_TORCH_3, TILE_TORCH_4]);
          // smoke/fire particles
          torch_particles(tileLeftEdgeX+TILE_W/2,tileTopEdgeY+TILE_H/3*2); 

        } else if (tileTypeHere==TILE_FLOOR_SLAB_1) {
          prngTile(eachCol, eachRow, [TILE_FLOOR_SLAB_1, TILE_FLOOR_SLAB_2, TILE_FLOOR_SLAB_3, TILE_FLOOR_SLAB_4]);
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
  roomGrid = rooms[ worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x] ]
}

function getRoomTo(DIRECTION) {
  // get the room to the north, south, east, or west of the current room
  switch(DIRECTION) {
    case NORTH:
      console.log(`getRoomTo() called with direction ${DIRECTION}`); 
       return worldGrid[(worldPosition.y-1)*WORLD_COLS + worldPosition.x];
       
        break;
    case SOUTH:
      console.log(`getRoomTo() called with direction ${DIRECTION}`); 
        return worldGrid[(worldPosition.y+1)*WORLD_COLS + worldPosition.x];
        break;
    case EAST:
      console.log(`getRoomTo() called with direction ${DIRECTION}`); 
        return worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x+1];
        break;
    case WEST:
      console.log(`getRoomTo() called with direction ${DIRECTION}`); 
        return worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x-1];
        break;
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