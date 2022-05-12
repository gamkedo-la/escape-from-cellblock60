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
var showMenu = true;
var paused = false;
var currentRoomId = "01";

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setUpMiniMapCanvas();
    SetupPathfindingGridData(p1);
    loadImages();
    addEnemies();
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
  updateMiniMap();
}

function moveEverything() {
   if (showMenu) {
     return;
   }  
    particles.update();
  
    switch (gameState) {
    case STATE_PLAY:
      p1.move();
      for(var i = 0; i < enemyList.length; i++){
        enemyList[i].move();
      }
      pruneEnemies();
      updatedCameraPosition();
      break;
    case STATE_GAME_OVER:
      drawGameOver();
      break;
  }
}

function pruneEnemies(){
  for(var i = 0; i < enemyList.length; i++){
    if(enemyList[i].dead){
      enemyList.splice(i,1);
    }
  }
}

function drawEverything() {
	shiftForCameraPan();
  drawLayer(roomGrid.bg || []);
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
  drawLayer(roomGrid.ceiling, true)

  particles.draw();

	finishedCameraPan();
  if(gameState == STATE_PAUSE) {
    drawPause();
    paused = true;
  } else {
    paused = false;
  }
  if(gameState == STATE_GAME_OVER) {
    drawGameOver();
  }
  
  frameIndex++
 drawHealth();
 drawAttackPowerCharge();
 drawCountEnemiesKilled();
 
 drawMiniMap(canvas.width-200,10);

 if (showMenu) {
  cellMenu.draw();
  cellMenu.update();
}
  //drawTileAtlas();

}

