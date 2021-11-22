# What starting data does my app need to run?

- Questions and answers
xt
- Each question will be and object
    ```
    {
        question: "Commonly used data types DO NOT include:",
        multipleChoiceOptions: [
            "string",
            "boolean",
            "alert",
            "number",
        ],
        correct: "alert",
    }
    ```
- Timer / Score

# What kind of interactions does my app need?

- Start game action (function startGame () {...})
    - Hide welcome message
    - Display the next question
    - Start the countdown timer
    function startTimer() {
        var interval = setInterval(function()) {
            ...
            clearInterval(interval);
        }
    }

- Answer a question

    - Validate the users choice
        - IF the choice is wrong, subtract time from timer

    - Display the next question

    - Display the answer "right/ wrong"

- End the game
    - Stop the timer from counting down (clearIntager)