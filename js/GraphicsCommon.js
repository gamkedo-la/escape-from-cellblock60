function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function centerColorRect(centerX, centerY, boxWidth, boxHeight, fillColor){
  colorRect(centerX - boxWidth/2, centerY - boxHeight/2, boxWidth, boxHeight, fillColor);
}

function outlineRect(topLeftX, topLeftY, boxWidth, boxHeight, lineColor, lineThickness = 3) {
    canvasContext.beginPath();
    canvasContext.strokeStyle = lineColor;
    canvasContext.lineWidth = "" +  lineThickness;
    canvasContext.rect(topLeftX, topLeftY, boxWidth, boxHeight);
    canvasContext.stroke();
}

function centerOutlineRect(centerX, centerY, boxWidth, boxHeight, lineColor) {
  outlineRect(centerX - boxWidth/2, centerY - boxHeight/2, boxWidth, boxHeight, lineColor);
}

function mapRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
	miniMapCanvasContext.fillStyle = fillColor;
	miniMapCanvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}
  
function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY,withAngle) {
  canvasContext.save(); // allows us to undo translate movement and rotate spin
  canvasContext.translate(atX,atY); // sets the point where our graphic will go
  canvasContext.rotate(withAngle); // sets the rotation
  canvasContext.drawImage(graphic,-graphic.width/2,-graphic.height/2); // center, draw
  canvasContext.restore(); // undo the translation movement and rotation since save()
}

function drawText(str, x, y, size, colour) {
  canvasContext.fillStyle = colour;
  canvasContext.font = size + 'px Arial';
  canvasContext.fillText(str, x, y);
}

function shadowText(text, atX, atY, size, offset, foregroundColor, backgroundColor){
  canvasContext.font = size + 'px Arial';
	canvasContext.fillStyle = backgroundColor;
	canvasContext.fillText(text, atX + offset, atY + offset)
	canvasContext.fillStyle = foregroundColor;
	canvasContext.fillText(text, atX, atY)
}

function drawImageRotatedAlpha(canvasContext, image, x, y, angle, opacity) {
    canvasContext.save();
    canvasContext.translate(x, y);
    if (angle !== undefined) canvasContext.rotate(angle);
    if (opacity !== undefined) canvasContext.globalAlpha = opacity;
    canvasContext.drawImage(image, -image.width / 2, -image.height / 2);
    canvasContext.restore();
  }

  function checkerboard(squareSize, color1, color2) {
    for(let i=0; i<GAME_HEIGHT/squareSize; i++) {
      for(let j=0; j<GAME_WIDTH/squareSize; j++) {
        color = ((i+j)%2==0) ? color1 : color2;
        let xOffset = j*squareSize;
        let yOffset = i*squareSize;
        colorRect(xOffset, yOffset, squareSize, squareSize, color);
      }
    }
  }