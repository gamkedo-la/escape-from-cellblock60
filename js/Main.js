// save the canvas for dimensions, and its 2d context for drawing to it
var canvas, canvasContext;

var p1 = new warriorClass();
var pathFindingDisplay = false;
var frameIndex = 0;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 450;
const CENTER_X = GAME_WIDTH / 2;
const CENTER_Y = GAME_HEIGHT / 2;

const STATE_PLAY = 1;
const STATE_PAUSE = 2;
const STATE_GAME_OVER = 3;
var gameState = STATE_PLAY;
var currentRoomId = "01";

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    SetupPathfindingGridData(p1);
    loadImages();
	for(var i = 0; i < roomGrid.floor.length; i++){
		if(roomGrid.floor[i] == TILE_ENEMY){
            addGhost(currentRoomId);
		} 
		if(roomGrid.floor[i] == TILE_OCTOGOLEM){
            addOctoGolem(currentRoomId);
		} 
	}
}

function loadingDoneSoStartGame() {
  // these next few lines set up our game logic and render to happen 30 times per second
  var framesPerSecond = 30;
  setInterval(function() {
      moveEverything();
      drawEverything();
  }, 1000 / framesPerSecond);

  p1.init(playerPic, "Blue");
  initInput();
}

function moveEverything() {
    
    particles.update();
  
    switch (gameState) {
    case STATE_PLAY:
      p1.move();
      for(var i = 0; i < enemyList.length; i++){
        enemyList[i].move();
      }
      updatedCameraPosition();
      break;
    case STATE_GAME_OVER:
      drawGameOver();
      break;
  }
}

function drawEverything() {
	shiftForCameraPan();
  drawLayer(roomGrid.floor);
  // draw shadows
  let lvl = worldGrid[worldPosition.y*WORLD_COLS + worldPosition.x];
  //console.log(`which lvl: ${lvl}`);
  drawShadows(lvl, roomGrid.floor, roomGrid.ceiling);
	if(pathFindingDisplay){
		drawPathingFindingTiles();
  }
    p1.draw();
	for(var i = 0; i < enemyList.length; i++){
		enemyList[i].draw();
	}
  drawLayer(roomGrid.ceiling)

  particles.draw();

	finishedCameraPan();
  if(gameState == STATE_PAUSE) {
    drawPause();
  }
  if(gameState == STATE_GAME_OVER) {
    drawGameOver();
  }
  frameIndex++
 drawHealth();
 drawAttackPowerCharge();
  //drawTileAtlas();

}

