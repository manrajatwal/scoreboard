let period = 1;
let timeLeft = 12 * 60;
let timerInterval;

function updateScore (team, points) { /* Updates score of a team by adding points */
    let scoreEl = document.getElementById (team + '-score') /* Finds the correct team score by document.getElementById */
    let currentScore = parseInt (scoreEl.textContent) /*converts the score to an integer */
    scoreEl.textContent = currentScore + points; /* Adds the points to the current score */
}

function resetGame () { /* Resets score of both teams to 0 */
    document.getElementById ('home-score').textContent = 0;
    document.getElementById('away-score').textContent = 0;
    document.getElementById('period').textContent = 1;
    document.getElementById('timer').textContent = "12:00";
    period = 1;
    timeLeft = 12 * 60;
    clearInterval(timerInterval);
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextPeriod();
            return;
        }
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function nextPeriod() {
    if (period < 4) {
        period;
        document.getElementById('period').textContent = period;
        timeLeft = 12 * 60;
        startTimer();
    }
}