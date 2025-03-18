'use strict'

function onBallClick() {
  var ball = document.querySelector(".ball");
  var size = parseInt(ball.style.width) || 100;
  size += 50;
  if (size > 400) size = 100;
  ball.style.width = size + "px";
  ball.style.height = size + "px";
  ball.innerText = size;
}