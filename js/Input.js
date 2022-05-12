// keyboard keycode constants, determined by printing out evt.keyCode from a key handler  
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;
const KEY_LETTER_P = 80;
const KEY_LETTER_R = 82;
const KEY_LETTER_M = 77;
const KEY_NUMBER_1 = 49;
const KEY_SPACEBAR = 32;

var mouseX = 0;
var mouseY = 0;
var tileOverIdx = -1;
var mouseDragging = false;

function initInput() {
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
  document.addEventListener("mousemove", mousemoved);
  document.addEventListener("mousedown", mouseclicked);
  document.addEventListener("mouseup", mousereleased); /////
  
  p1.setupControls(KEY_UP_ARROW,KEY_RIGHT_ARROW,KEY_DOWN_ARROW,KEY_LEFT_ARROW, KEY_SPACEBAR);
}

function setKeyHoldState(thisKey, thisPlayer, setTo) {
  if(thisKey == thisPlayer.controlKeyForNorth) {
    thisPlayer.keyHeld_North = setTo;
  }
  if(thisKey == thisPlayer.controlKeyForEast) {
    thisPlayer.keyHeld_East = setTo;
  }
  if(thisKey == thisPlayer.controlKeyForSouth) {
    thisPlayer.keyHeld_South = setTo;
  }
  if(thisKey == thisPlayer.controlKeyForWest) {
    thisPlayer.keyHeld_West = setTo;
  }
}

function keyPressed(evt) {
  if (!musicStarted) startMusic();
  setKeyHoldState(evt.keyCode, p1, true);
  //console.log(evt.keyCode);
  //console.log(evt.keyCode);
  if(evt.keyCode == KEY_NUMBER_1){
	  pathFindingDisplay = !pathFindingDisplay;
  }
  if(evt.keyCode == KEY_LETTER_P && paused == false){
	  gameState = STATE_PAUSE;
  } else if (paused = true) {
    gameState = STATE_PLAY;
  }
  if(evt.keyCode == KEY_LETTER_R){
	  gameState = STATE_PLAY;
  }
  if (evt.keyCode == KEY_LETTER_M) {
    // toggle mute
  }
  if (evt.keyCode == KEY_SPACEBAR && p1.sword){
    p1.swingSword();
  }



  evt.preventDefault(); // without this, arrow keys scroll the browser!
}

function keyReleased(evt) {
  setKeyHoldState(evt.keyCode, p1, false);
}

var musicStarted = false;
var music = null;
function startMusic() {
    console.log("first click or keypress occurred: now we can start the music");
    music = sfx("sounds/dungeon-music.mp3",0.1,true);
    musicStarted = true;
}


function mouseclicked(evt) {

    if (!musicStarted) startMusic();

    if(showMenu) {
      cellMenu.clickOption();
    } else if(tileOverIdx != -1 && grid[tileOverIdx].elementType != WALL) {
		  startPath(tileOverIdx, p1); 
    }

}



function mousereleased(evt) {
    mouseDragging = false;
}

var canvMouseX=0,canvMouseY=0; // pixels on canvas, ignores css scaling
function mousemoved(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    // account for the margins, canvas position on page, scroll amount, etc.
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
    canvMouseX = Math.floor(mouseX * canvas.width / canvas.clientWidth);
    canvMouseY = Math.floor(mouseY * canvas.height / canvas.clientHeight);

    var tileOverCol = Math.floor(mouseX / TILE_W);
    var tileOverRow = Math.floor(mouseY / TILE_H);

    mouseOverSidebar = (tileOverCol >= ROOM_COLS);
    if(mouseOverSidebar) {
        tileOverIdx = -1;
    } else {
        tileOverIdx = tileCoordToIndex(tileOverCol, tileOverRow);
    }

    if(mouseDragging && tileOverIdx != -1) { /////
      /*  if(mouseSettingWalls) { /////
            if(grid[tileOverIdx].elementType != WALL) {
               grid[tileOverIdx].wallToggle(); 
            }
        } else {
            if(grid[tileOverIdx].elementType == WALL) {
               grid[tileOverIdx].wallToggle(); 
            }
        } */
    } /////
}