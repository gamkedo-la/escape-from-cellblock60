const MINIMAP_TILE_SIZE = 1;

function drawMiniMap (x, y) {
var tileIndex = 0;
var tileLeftEdgeX = 0;
var tileUpEdgeY = 0;

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
    mapRect(tileLeftEdgeX, tileUpEdgeY, MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE, miniMapColor);
    var miniMapColor;
    if (tileTypeWalkable()) {
        miniMapColor = "grey";
    } else {
        miniMapColor = "white";
    }
    //showPlayerInMap(x + mapCol * MINIMAP_TILE_SIZE, y + mapRow * MINIMAP_TILE_SIZE, screenCols * MINIMAP_TILE_SIZE, screenRows * MINIMAP_TILE_SIZE, "red");
}

