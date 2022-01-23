function drawPause() {
  // offset colour so text shows on any background
  drawText('Paused', 306, 253, 64, 'black')
  drawText('Paused', 300, 250, 64, 'yellow')
}

function drawHealth() {
  shadowText('Health', 10, 15, 'grey', 'purple')
  outlineRect(10,20,100, 20,'grey');
  colorRect(10, 20, 100, 20, 'brown');
  colorRect(10, 20, p1.health, 20, 'red');
}