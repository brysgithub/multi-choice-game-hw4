// target needed elements 
var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var gameBoxEl = document.getElementById("game-box");
var questionHeadingEl = document.getElementById("game-header");
var questionTextEl = document.getElementById("game-text");
// var questionBtn1El = document.getElementById("questionBtn1");
// var questionBtn2El = document.getElementById("questionBtn2");
// var questionBtn3El = document.getElementById("questionBtn3");
// var questionBtn4El = document.getElementById("questionBtn4");
// var questionBtn;
var selectedQuestion;
// var questionBtn1
// var questionBtn2
// var questionBtn3
// var questionBtn4

var timeLeft;

// var highScores = [];

var questionArray = [{
    question: "Question1",
        questionTitle: ["question title"],
        multipleChoiceOptions: [
            "wrong1",
            "wrong2",
            "right",
            "wrong3",
        ],
        correct: "right",
},
// {
//     question: "Question2",
//         multipleChoiceOptions: [
//             "wrong1",
//             "wrong2",
//             "right",
//             "wrong3",
//         ],
//         correct: "right",
// },
// {
//     question: "Question3",
//         multipleChoiceOptions: [
//             "wrong1",
//             "wrong2",
//             "right",
//             "wrong3",
//         ],
//         correct: "right",
//     }
];

// event listeners 
startButtonEl.addEventListener("click", startGame);

// build out listeners for question buttons

// V functions of funcionality V

// start button starting all the things
function startGame () {
    console.log("Game start!");
    startButtonEl.style.display = "none";
    questionHeadingEl.innerHTML = "";
    questionTextEl.innerHTML = "";
    startTimer();
    displayQuestion();

    // if (chosenAnswer === selectedQuestion.correct[0]) {
    //     console.log("Correct!");
    // }
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
    
    clearInterval(timeInterval);
    endGame();
        }
    }, 1000);    
};

// call for loop to display question
function displayQuestion () {
    console.log("Display question!")

    chooseQuestion(questionArray);

    // write title and question
    questionHeadingEl.innerHTML = selectedQuestion.questionTitle;
    questionTextEl.innerHTML = selectedQuestion.question;

    //add buttons - TODO loop single section to procedurally add buttons -
    var questionBtn1 = document.createElement("button");
    questionBtn1.className = "question-btn";
    gameBoxEl.appendChild(questionBtn1);
    questionBtn1.innerHTML = selectedQuestion.multipleChoiceOptions[0];

    var questionBtn2 = document.createElement("button");
    questionBtn2.className = "question-btn";
    gameBoxEl.appendChild(questionBtn2);
    questionBtn2.innerHTML = selectedQuestion.multipleChoiceOptions[1];

    var questionBtn3 = document.createElement("button");
    questionBtn3.className = "question-btn";
    gameBoxEl.appendChild(questionBtn3);
    questionBtn3.innerHTML = selectedQuestion.multipleChoiceOptions[2];

    var questionBtn4 = document.createElement("button");
    questionBtn4.className = "question-btn";
    gameBoxEl.appendChild(questionBtn4);
    questionBtn4.innerHTML = selectedQuestion.multipleChoiceOptions[3];

};

// make for loop to sequentially select questions
function chooseQuestion (array) {
    // var selectedQuestion;
    for (let i = 0; i < array.length; i++) {
        selectedQuestion = array[i];
        
    } return selectedQuestion;
};

// end game
function displayScore (){};

function endGame () {
    if (timeLeft === 0) {
        console.log("Game Over!");
        displayScore();
    }
};

// nameOfContainer.innertHTML = ""; to empty a string