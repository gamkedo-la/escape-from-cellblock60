const MINIMAP_TILE_SIZE = 10;

function drawMiniMap (x, y) {

    mapCol = camPanX / (TILE_W);
    mapRow = camPanY/ (TILE_H);
    screenCols = Math.floor(canvas.width/TILE_W);
    screenRows = Math.floor(canvas.height/TILE_H);
    minimapHorizentalPercent = mapCol/ROOM_COLS;
    scrollOverlap = ROOM_COLS - canvas.width;
    if (scrollOverlap > 0) {
        x -= scrollOverlap * minimapHorizentalPercent * 1.99;  
    }
    canvasContext.drawImage(miniMapCanvas, x, y);
    

    //showPlayerInMap(x + mapCol * MINIMAP_TILE_SIZE, y + mapRow * MINIMAP_TILE_SIZE, screenCols * MINIMAP_TILE_SIZE, screenRows * MINIMAP_TILE_SIZE, "red");
}

function updateMiniMap() {//should only be called when the map changes
    var tileIndex = 0;
    var tileLeftEdgeX = 0;
	var tileUpEdgeY = 0;
	// we'll use Math.floor to round down to the nearest whole number
 
    var leftCol = 0;
    var rightCol = ROOM_COLS;
    var topRow = 0;
    var bottomRow = ROOM_ROWS;

    for(var eachRow=topRow; eachRow<bottomRow; eachRow++) {// deal with one row at a time 
        for(var eachCol=leftCol; eachCol<rightCol; eachCol++) { // left to right in each row
        tileIndex = roomTileToIndex(eachCol,eachRow);
        var tileTypeHere = roomGrid.floor[tileIndex];// getting the tile code for this index
        tileLeftEdgeX = eachCol*MINIMAP_TILE_SIZE;
		tileUpEdgeY = eachRow*MINIMAP_TILE_SIZE;
		var miniMapColor;
        if(tileTypeWalkable(tileTypeHere)) {
            miniMapColor = "grey";
        } else {
            miniMapColor = "white";
        }
        mapRect(tileLeftEdgeX, tileUpEdgeY, MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE, miniMapColor);

	  } // end of for eachCol
	} // end of for eachRow
	//draws walls on the world edge. should save dats so this code shouldn't stay.
} // end of drawRoom()

