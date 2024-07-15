let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(val) {
  return `${val}`.padStart(2, "0");
}

// display time function
function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

// increment secondsElapsed by 1
function timer() {
  secondsElapsed++;
  setTime();
}

function startClock() {
  // run only if the interval is null
  if (!interval) {
    // for every 1000ms run timer() function
    interval = setInterval(timer, 1000);
  }
}

function stopClock() {
  clearInterval(interval); // to stop interval from running
  interval = null; // to be able to start the clock again
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
