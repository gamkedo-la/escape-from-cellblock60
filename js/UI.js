const MENU_PAGE_MAIN = 0;
const MENU_PAGE_HELP = 1;
const MENU_PAGE_VOLUME = 2;
const MENU_PAGE_OPTIONS = 3;
const MENU_PAGE_CREDITS = 4;
let currentMenu = MENU_PAGE_MAIN; 

function drawPause() {
  // offset colour so text shows on any background
  shadowText('Paused', 300, 250, 64, 4, 'yellow', 'black');
}

function drawHealth() {
  shadowText('Health', 10, 15, 12, 2, 'yellow', 'purple')
  outlineRect(10, 20, 100, 12, 'grey');
  colorRect(10, 20, 100, 12, 'brown');
  colorRect(10, 20, p1.health, 12, 'red');
}

function drawAttackPowerCharge() {
  shadowText('AP', 10, 45, 12, 2, 'yellow', 'purple')
  outlineRect(10, 50, 100, 12, 'grey');
  colorRect(10, 50, 100, 12, 'yellow');
  colorRect(10, 50, attackPowerDelay, 12, 'green');
  //console.log(attackPowerDelay)
}

function drawCountEnemiesKilled() {
  victoryStr = 'Enemies defeated: '.concat(countEnemiesKilled)
  shadowText(victoryStr, 120, 15, 12, 2, 'yellow', 'purple')
}

function drawGameOver() {
  centerColorRect(CENTER_X, CENTER_Y, GAME_WIDTH, 200, 'red');
  shadowText('GAME OVER', CENTER_X-200, CENTER_Y, 64, 5, 'white', 'black')
}


const cellMenu = new function() {
  let itemsX = 240;
  let topItemY = 200;
  let itemsWidth = 350;
  let itemsHeight = 80;
  let rowHeight = 85;
  let helpTextBoxWidth = 930;

  let mainMenuList = ["PLAY",
      "HELP",
      "VOLUME",
      "OPTIONS",
      "CREDITS"
  ];
  let helpText = [];
  let creditsText = [];
  let menuText = [
    mainMenuList,
    helpText,
    creditsText
  ];
  const selectedItemOnPage = menuText[currentMenu][this.cursor];
  this.draw = function() {
    canvasContext.globalAlpha = 0.05;
    canvasContext.fillStyle = "#222222";
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.globalAlpha = 1.0;

    for (let i = 0; i < menuText[currentMenu].length; i++) {
      colorRect(itemsX, topItemY + rowHeight * i, itemsWidth, itemsHeight, '#6b0dad');
      colorText(menuText[currentMenu][i],itemsX + 10,topItemY + rowHeight * i + itemsHeight / 1.5, 40,"gold");
    }
  }
}