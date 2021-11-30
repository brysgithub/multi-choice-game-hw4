// target needed elements 
var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var gameBoxEl = document.getElementById("game-box");
var questionHeadingEl = document.getElementById("game-header");
var questionTextEl = document.getElementById("game-text");
var hiddenBtnEl = document.getElementById("answer-btn");


var selectedQuestion;

var timeLeft;

// var highScores = [];

var questionArray = [{
    question: "In what year was Joan of Arc burnt at the stake?",
        questionTitle: ["History"],
        multipleChoiceOptions: [
            "1441",
            "1398",
            "1431",
            "1776",
        ],
        correct: "1431",
    }
];

// event listeners 
startButtonEl.addEventListener("click", startGame);

// V functions of funcionality V

// start button starting all the things
function startGame () {
    console.log("Game start!");
    questionHeadingEl.innerHTML = "";
    questionTextEl.innerHTML = "";
    startButtonEl.classList.add("hide");
    hiddenBtnEl.classList.remove("hide");
    
    startTimer();
    displayQuestion();

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
        timerEl.textContent = 'Time left (seconds): 0';
    
    clearInterval(timeInterval);
        }
    }, 1000);    
};

// call for loop to display question
// !IMPORTANT! implement question index pointer ++ to select the proper array to draw from
function displayQuestion () {
    console.log("Display question!")

    chooseQuestion(questionArray);

    // write title and question
    questionHeadingEl.innerHTML = selectedQuestion.questionTitle;
    questionTextEl.innerHTML = selectedQuestion.question;

    //add buttons - TODO loop single section to procedurally add buttons -!find way to grab answers length!
    // for (let index = 0; index < questionArray.question.multipleChoiceOptions.length; index++) {
        
    //     var questionBtn = document.createElement("button");
    //     questionBtn.className = "question-btn";
    //     gameBoxEl.appendChild(questionBtn);
    //     questionBtn.innerHTML = selectedQuestion.multipleChoiceOptions[index];
    // }
};

// check answer
// function checkAnswer(){

    // if (chosenAnswer === selectedQuestion.correct[0]) {
    //     console.log("Correct!");
    // } else {
    //     timeLeft - 10;
    // };
// };

// make for loop to sequentially select questions
function chooseQuestion (array) {
    // var selectedQuestion;
    for (let i = 0; i < array.length; i++) {
        selectedQuestion = array[i];
        
    } return selectedQuestion;
};

// end game
// function displayScore (){};

// function endGame () {
    // if (timeLeft === 0) {
    //     console.log("Game Over!");
    //     displayScore();
    // }
// };

// nameOfContainer.innertHTML = ""; to empty a string