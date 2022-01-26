function drawPause() {
  // offset colour so text shows on any background
  // drawText('Paused', 306, 253, 64, 'black')
  // drawText('Paused', 300, 250, 64, 'yellow')
  shadowText('Paused', 300, 250, 64, 4, 'yellow', 'black');
}

function drawHealth() {
  shadowText('Health', 10, 15, 12, 2, 'yellow', 'purple')
  outlineRect(10,20,100, 20,'grey');
  colorRect(10, 20, 100, 20, 'brown');
  colorRect(10, 20, p1.health, 20, 'red');
}