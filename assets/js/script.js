// target needed elements 
var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer")
var questionBtn1El = document.getElementById("questionBtn1");
var questionBtn2El = document.getElementById("questionBtn2");
var questionBtn3El = document.getElementById("questionBtn3");
var questionBtn4El = document.getElementById("questionBtn4");

var timeLeft;

var questionArray = {
    question: "Question",
        multipleChoiceOptions: [
            "wrong1",
            "wrong2",
            "right",
            "wrong3",
        ],
        correct: "alert",
}

// event listeners 
startButtonEl.addEventListener("click", startGame);

// functions of funcionality
function startGame () {
    console.log("Game start!")
    startTimer()
    displayFirstQuestion()
};

// starts timer
function startTimer () {
    console.log("Timer start!")
    
    var timeLeft = 180;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = 'Time left (seconds): ' + timeLeft;
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = 'Time left (seconds): ' + timeLeft;
        timeLeft--;
    } else {
        timerEl.textContent = '';
    // Use `clearInterval()` to stop the timer
    clearInterval(timeInterval);
    // Call the `displayMessage()` function
    endGame();
        }
    }, 1000);
      
};

function displayFirstQuestion () {
    console.log("First question!")
};

function endGame () {};

// nameOfContainer.innertHTML = ""; to empty a string