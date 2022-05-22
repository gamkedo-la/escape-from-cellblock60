const MENU_PAGE_MAIN = 0;
const MENU_PAGE_CREDITS = 1;
var currentMenu = MENU_PAGE_MAIN;

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
  //shadowText('AP', 10, 45, 12, 2, 'yellow', 'purple')
  //outlineRect(10, 50, 100, 12, 'grey');
  //colorRect(10, 50, 100, 12, 'yellow');
  //colorRect(10, 50, attackPowerDelay, 12, 'green');
  //console.log(attackPowerDelay)
}

function drawCountEnemiesKilled() {
  victoryStr = 'Enemies defeated: '.concat(countEnemiesKilled)
  //shadowText(victoryStr, 120, 15, 12, 2, 'yellow', 'purple')
}

function drawGameOver() {
  centerColorRect(CENTER_X, CENTER_Y, GAME_WIDTH, 200, 'red');
  shadowText('GAME OVER', CENTER_X-200, CENTER_Y, 64, 5, 'white', 'black')
}


const cellMenu = new function() {
  let itemsX = 240;
  let topItemY = 270;
  let itemsWidth = 350;
  let itemsHeight = 70;
  let rowHeight = 75;

  let menuText = ["PLAY",
      "CREDITS"
  ];


  this.checkState = function() {
    const selectedItemOnPage = menuText[this.cursor];
    for (let i = 0; i < menuText.length; i++) {
      if (selectedItemOnPage === menuText[i].toString()) {
          colorRect(itemsX, topItemY + rowHeight * i, itemsWidth, itemsHeight, '#897ca0');
          drawText(
              menuText[i].toString(),
              itemsX + 14,
              topItemY + rowHeight * i + 4 + itemsHeight / 1.5,
              45,
              "#c4b188"
          );
        }
    }
}
  this.clickOption = function() {
    if (currentMenu != MENU_PAGE_MAIN){
        currentMenu = MENU_PAGE_MAIN;
        showMenu = false; // start game
    } else switch (menuText[this.cursor]) {
        case "PLAY":
            showMenu = false;
            break;
        case 'CREDITS':
            currentMenu = MENU_PAGE_CREDITS;
            break;
        default:
            console.log("unhandled menu item");
            break;
    }
    this.cursor = 0;
  }
  
  this.draw = function() {
    let closeTextHeight = 20
    canvasContext.drawImage(titleLogo,(canvas.width-titleLogo.width)/2,(canvas.height-titleLogo.height)/2);

    switch(currentMenu) {
        case MENU_PAGE_MAIN:
            for (let i = 0; i < menuText.length; i++) {
                colorRect(itemsX, topItemY + rowHeight * i, itemsWidth, itemsHeight, '#504324');
                drawText(
                    menuText[i],
                    itemsX + 10,
                    topItemY + rowHeight * i + itemsHeight / 1.5,
                    40,
                    "#8b7d9f"
                );
            }
            break;
        case MENU_PAGE_CREDITS:
            drawCredits();
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
      const selectedItemOnPage = menuText[this.cursor];
      var offsetY = 0;
      for (let i = 0; i < menuText.length; i++) {
          if (
              //mouseX > itemsX - 350 && mousePosX + itemsWidth &&
              canvMouseY > topItemY + i * rowHeight - offsetY &&
              canvMouseY < topItemY + i * rowHeight + itemsHeight - offsetY
          ) {
              this.setCursorAndCurrentPage(i);
          }
      }
  };
  this.update = function() {
      if(currentMenu != MENU_PAGE_MAIN) {
        return;
      }
      this.menuMouse();
      // Position arrow at last option on screen
      if (this.cursor < 0) {
          this.cursor = menuText.length - 1;
      }

      // Position arrow at first option on screen
      if (this.cursor >= menuText.length) {
          this.cursor = 0;
      }
  }

}

var creditsList = [
"Vince McKeown: Project lead, core gameplay, warrior animations, ghost and skeleton sprite facings, level design (shared), assorted environment art (yellow), statue, spider webs, collision handling, projectiles art/code, lock and key, pathfinding, art integration, tuning",
"Ryan Malm: Tile atlas, level design (shared), dungeon music, whisp particle fix, room optimization (enemies/particles), hit flash, sword swish animation and damage, spike trap functionality, game over handling, ghost enemy refactor, pixel scaling css, room bug fix",
"Tylor Allison: Art (wall sword, wall shield, skeleton portrait, zombie with pearl earring, torch sprite, plaques, cave floors/walls), floor tile variations, spikes, tile randomization functionality, wall shadows, stair down tweak, level system",
"Christer \"McFunkypants\" Kaitila: Octo golem enemy (with behavior), carpet tiles, move diagonal input support, particles (torch, red, sparkle, sword, dust), splash screen with logo, double door functionality, painting eyes follow layer, assorted sound effects (including sword swings), audio integration, scrollbars fix",
"Patrick McKeown: Table art, room decoration placement (furniture, pottery, desk) pottery room, pause feature, readability improvements, font size fix, debug counter",
"Vaan Hope Khani: Wood box, rug art, minimap, health UI, main menu functionality",
"Gonzalo Delgado: Ghost animation, ghost death, ghost bobbing, table sprite, barred dungeon window, player idle animation",
"H Trayford: Floor and ceiling tile layer support, two additional rooms, tile system refactor, shadow fix",
"Abhishek @akhmin_ak: Desk, chain wall, enemy ram",
"Evan Sklarski: Mute toggle, health and related properties",
"Philip Greene: Broken prison wall variations",
"Justin Chin: Broken brick tile integration, enemy dialog test",
"Johan Östling: Sword animation fix",
" ",
"                    Game developed by members in HomeTeamGameDev.com - come make games with us!",
"                                                               - Click anywhere to begin game -"
];

function drawCredits() {
  var lineX = 13;
  var lineY = 1;
  var creditsSize = 15;
  var lineSkip = creditsSize+1;
  colorRect(0, 0, canvas.width, canvas.height, "#504324");
  for(var i=0;i<creditsList.length;i++) {
      drawText(creditsList[i], lineX, lineY+=lineSkip, creditsSize, "#d0bc92");
  }
}

function lineWrapCredits() { // note: gets calling immediately after definition!
  const newCut = [];
  var maxLineChar = 114;
  var findEnd;

  for(let i = 0; i < creditsList.length; i++) {
    const currentLine = creditsList[i];
    for(let j = 0; j < currentLine.length; j++) {
      /*const aChar = currentLine[j];
      if(aChar === ":") {
        if(i !== 0) {
          newCut.push("\n");
        }

        newCut.push(currentLine.substring(0, j + 1));
        newCut.push(currentLine.substring(j + 2, currentLine.length));
        break;
      } else*/ if(j === currentLine.length - 1) {
        if((i === 0) || (i >= creditsList.length - 2)) {
          newCut.push(currentLine);
        } else {
          newCut.push(currentLine.substring(0, currentLine.length));
        }
      }
    }
  }

  const newerCut = [];
  for(var i=0;i<newCut.length;i++) {
    while(newCut[i].length > 0) {
      findEnd = maxLineChar;
      if(newCut[i].length > maxLineChar) {
        for(var ii=findEnd;ii>0;ii--) {
          if(newCut[i].charAt(ii) == " ") {
            findEnd=ii;
            break;
          }
        }
      }
      newerCut.push(newCut[i].substring(0, findEnd));
      newCut[i] = newCut[i].substring(findEnd, newCut[i].length);
    }
  }

  creditsList = newerCut;
}
lineWrapCredits(); // note: calling immediately as part of init, outside the function