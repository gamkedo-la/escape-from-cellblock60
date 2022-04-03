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


  this.checkState = function() {
    const selectedItemOnPage = menuText[currentMenu][this.cursor];
    for (let i = 0; i < menuText[currentMenu].length; i++) {
      if (selectedItemOnPage === menuText[currentMenu][i].toString()) {
          colorRect(itemsX, topItemY + rowHeight * i, itemsWidth, itemsHeight, 'grey');
          drawText(
              menuText[currentMenu][i].toString(),
              itemsX + 14,
              topItemY + rowHeight * i + 4 + itemsHeight / 1.5,
              45,
              "#FFE993"
          );
        }
    }
}
  this.clickOption = function() {
    const selectedItemOnPage = menuText[currentMenu][this.cursor];
    // console.log("clicked on menu: " + selectedItemOnPage);

    if (currentMenu != MENU_PAGE_MAIN){
        currentMenu = MENU_PAGE_MAIN;
    } else switch (selectedItemOnPage) {
        case "PLAY":
            showMenu = false;
            break;
        case "LOAD":
          currentMenu = MENU_PAGE_LOAD;
            break;
        case 'OPTIONS/HELP':
            currentMenu = MENU_PAGE_OPTIONS;
            break;
        case 'VOLUME':
            break;
        case 'CREDITS':
            currentMenu = MENU_PAGE_CREDITS;
            break;
        default:
            console.log("unhandeled menu item");
            break;
    }
    this.cursor = 0;
  }
  
  this.draw = function() {
    let closeTextHeight = 20
    canvasContext.globalAlpha = 0.05;
    canvasContext.fillStyle = "#111111";
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.globalAlpha = 1.0;

    drawText(
      'X key will close this menu',
      30,
      closeTextHeight,
      closeTextHeight,
      "#dddddd"
  )

    switch(currentMenu) {
        case MENU_PAGE_MAIN:
            for (let i = 0; i < menuText[currentMenu].length; i++) {
                colorRect(itemsX, topItemY + rowHeight * i, itemsWidth, itemsHeight, '#6e0fad');
                drawText(
                    menuText[currentMenu][i],
                    itemsX + 10,
                    topItemY + rowHeight * i + itemsHeight / 1.5,
                    40,
                    "green"
                );
            }
            break;
        case MENU_PAGE_HELP:
            break;
        case MENU_PAGE_CREDITS:
            break;
    }
  }

  this.setCursorAndCurrentPage = function(cursor = this.cursor) {
      // For now, only allow selection of an option on the main menu page
      if (currentMenu !== 0) {
          return;
      }

      this.cursor = cursor;
      // Change page
      currentPage = this.cursor;

      // Set the cursor at the first option of the new screen
      this.checkState();
      //selectionSFX.play();

  };

  this.menuMouse = function() {
      const selectedItemOnPage = menuText[currentMenu][this.cursor];
      var offsetY = 30;
      for (let i = 0; i < menuText[currentMenu].length; i++) {
          if (
              //mouseX > itemsX - 350 && mousePosX + itemsWidth &&
              mouseY > topItemY + i * rowHeight - offsetY &&
              mouseY < topItemY + i * rowHeight + itemsHeight - offsetY
          ) {
              this.setCursorAndCurrentPage(i);
          }
      }
  };
  this.update = function() {
      this.menuMouse();
      // Position arrow at last option on screen
      if (this.cursor < 0) {
          this.cursor = menuText[currentMenu].length - 1;
      }

      // Position arrow at first option on screen
      if (this.cursor >= menuText[currentMenu].length) {
          this.cursor = 0;
      }
  }

}