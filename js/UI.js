function drawPause() {
  // offset colour so text shows on any background
  // drawText('Paused', 306, 253, 64, 'black')
  // drawText('Paused', 300, 250, 64, 'yellow')
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

function drawGameOver() {
  centerColorRect(CENTER_X, CENTER_Y, GAME_WIDTH, 200, 'red');
  shadowText('GAME OVER', CENTER_X-200, CENTER_Y, 64, 5, 'white', 'black')
}
