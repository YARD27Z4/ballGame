'use strict'

function onBallClick(maxDiameter) {
  var ball = event.target;
  var currentSize = parseInt(ball.style.width) || 100
  var newSize = currentSize + 50

  if (newSize > maxDiameter) {
      newSize = 100; // אם הגודל עובר את המגבלה - נאפס אותו ל-100px
  }

  ball.style.width = newSize + "px"
  ball.style.height = newSize + "px"
  ball.textContent = newSize;
}
