// target needed elements 
var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer")
var questionHeading = document.getElementById("game-header");
var questionText = document.getElementById("game-text");
// var questionBtn1El = document.getElementById("questionBtn1");
// var questionBtn2El = document.getElementById("questionBtn2");
// var questionBtn3El = document.getElementById("questionBtn3");
// var questionBtn4El = document.getElementById("questionBtn4");
var questionBtn;
var selectedQuestion;

var timeLeft;

// var highScores = [];

var questionArray = [{
    question: "Question1",
        multipleChoiceOptions: [
            "wrong1",
            "wrong2",
            "right",
            "wrong3",
        ],
        correct: "right",
},
{
    question: "Question2",
        multipleChoiceOptions: [
            "wrong1",
            "wrong2",
            "right",
            "wrong3",
        ],
        correct: "right",
},
{
    question: "Question3",
        multipleChoiceOptions: [
            "wrong1",
            "wrong2",
            "right",
            "wrong3",
        ],
        correct: "right",
    }
];

// event listeners 
startButtonEl.addEventListener("click", startGame);

// build out listeners for question buttons

// V functions of funcionality V

// start button starting all tthe things
function startGame () {
    console.log("Game start!");
    startButtonEl.style.display = "none";
    questionHeading.innerHTML = "";
    questionText.innerHTML = "";
    startTimer();
    displayQuestion();
};

// starts timer. crazy right?
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
    
    clearInterval(timeInterval);
    endGame();
        }
    }, 1000);    
};

// call for loop to display question
function displayQuestion () {
    console.log("Display question!")

    selectQuestion(questionArray);
    // questionBtn.innerHTML = [0];

};

// make for loop to sequentially select questions
function selectQuestion (array) {
    // var selectedQuestion;
    for (let i = 0; i < array.length; i++) {
        selectedQuestion = array[i];
        
    } return selectedQuestion;
};

function endGame () {
    if (timeLeft === 0) {

    }
};

// nameOfContainer.innertHTML = ""; to empty a string