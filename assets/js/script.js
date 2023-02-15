var timerEl = document.querySelector('h2')

console.log(timerEl)
function timer() {
    var timeLeft = 100;

    var timeDecrease = setInterval(function() {
        if (timeLeft > 0) {
        
            timerEl.textContent = 'Time: ' + timeLeft;

            timeLeft--;
            console.log(timeLeft)
        } else {
            clearInterval(timeDecrease)
            console.log(timeLeft)
            timeLeft.textContent = 'Game Over!';
        }
    }, 1000)
}

timer()