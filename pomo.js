// Select elements
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const pomodoroBtn = document.getElementById("pomodoro-session");
const shortBreakBtn = document.getElementById("short-break");
const longBreakBtn = document.getElementById("long-break");
const timerEl = document.getElementById("timer");

// Variables to track timer and intervals
let interval = null;
let timeLeft = 1500; // Default to 25 minutes

// Function to update displayed time
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start timer function
function startTimer() {
  if (interval) return; // Prevents multiple intervals from starting
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(interval);
      interval = null;
      alert("Time's up!");
      timeLeft = 1500; // Reset to default
      updateTimer();
    }
  }, 1000);
}

// Stop timer function
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

// Reset timer function
function resetTimer() {
  stopTimer();
  timeLeft = 1500; // Reset time to default
  updateTimer();
}

// Set timer based on selected session
function setTimer(durationInMinutes) {
  stopTimer();
  timeLeft = durationInMinutes * 60;
  updateTimer();
}

// Event listeners for buttons
pomodoroBtn.addEventListener("click", () => setTimer(25)); // Pomodoro (25 mins)
shortBreakBtn.addEventListener("click", () => setTimer(5)); // Short Break (5 mins)
longBreakBtn.addEventListener("click", () => setTimer(10)); // Long Break (10 mins)
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

// Initial display update
updateTimer();
