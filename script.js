'use strict';
const containerEl = document.getElementById('container');
const textEl = document.getElementById('text');
const countEl = document.getElementById('count');

const breatheInTime = 4000; // 4 seconds
const holdTime = 7000; // 7 seconds
const breatheOutTime = 8000; // 8 seconds
const restTime = 1000; // 1 second

// Total time for one full breathing cycle
const totalTime = breatheInTime + holdTime + breatheOutTime + restTime;

let interval;
let elapsedTime = 0;

function countSeconds(duration) {
  clearInterval(interval); // Clear any existing interval
  elapsedTime = 0; // Reset elapsed time
  countEl.innerHTML = `${elapsedTime + 1}`;

  interval = setInterval(() => {
    elapsedTime++;
    countEl.innerHTML = `${elapsedTime + 1}`;
    if (elapsedTime >= duration / 1000 - 1) {
      // Stop counting when phase duration is reached
      clearInterval(interval);
    }
  }, 1000); // Update every second
}

breathAnimation();
function breathAnimation() {
  countSeconds(breatheInTime);
  textEl.innerHTML = 'Breathe In!';
  containerEl.className = 'container grow';

  setTimeout(() => {
    countSeconds(holdTime);
    textEl.innerHTML = 'Hold';

    setTimeout(() => {
      countSeconds(breatheOutTime);
      textEl.innerHTML = 'Breathe Out!';
      containerEl.className = 'container shrink';

      setTimeout(() => {
        // countSeconds(restTime);
        text.innerText = 'Rest';
        containerEl.className = 'container';
      }, breatheOutTime);
    }, holdTime);
  }, breatheInTime);
}

setInterval(breathAnimation, totalTime);
