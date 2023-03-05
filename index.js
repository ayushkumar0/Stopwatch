// Get the elements
const displayEl = document.querySelector(".clock");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

let startTime;
let elapsedTime = 0;
let timerInterval;

// Format the time string
function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = Math.floor(time - hours * 3600 - minutes * 60);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
}

// Start the timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    displayEl.textContent = formatTime(elapsedTime / 1000);
  }, 100);
  startBtn.disabled = true;
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

// Reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayEl.textContent = "00:00:00";
  startBtn.disabled = false;
}

// Add event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
