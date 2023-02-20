// These are the ids and classes in the HTML that I referenced in the JS
var timerEl = document.querySelector('.timer')
var startQuizEl = document.querySelector('.start-quiz')
var quizEl = document.querySelector('.quiz')
var scoreEl = document.querySelector('.score')
var highScoreEl = document.querySelector('.high-score')
var initialTextEl = document.querySelector("#initial-text")
var scoreButtonEl = document.querySelector("#submit-initials")
var clearButtonEl = document.querySelector("#clear-high-scores")
var viewHighScoresEl = document.querySelector(".view-high-score")
var rightOrWrongEl = document.querySelector("#right-or-wrong")
var codeQuizHeaderEl = document.querySelector('.code-quiz-header')

// Hides unnecessary elements that will become visible when called upon
scoreEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
highScoreEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
quizEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")

// questions were copied from the following website: https://www.interviewbit.com/javascript-mcq/
// Eventually I'd like to write/acquire more questions and add in more psychometrically sound scoring so that I can use this app going forward.
var questions =
      [
        {
            question_id: 1,
            prompt: "What does the Javascript 'debugger' statement do?",
            distractors: ["It will debug all the errors in the program at runtime.","It acts as a breakpoint in a program.","It will debug error in the current statement if any.","All of the above."],
            key: 1
        },

        {
            question_id: 2,
            prompt: "Javascript is an ______________ language",
            distractors: ["Object-Oriented","Object-Based","Procedural","None of the Above"],
            key: 0
        },

        {
            question_id: 3,
            prompt: "Which of the following keywords is used to define a variable in Javascript?",
            distractors: ["var","let","Both A and B","None of the Above"],
            key: 2
        },

        {
            question_id: 4,
            prompt: "Which of the following methods can be used to display data in some form using Javascript?",
            distractors: ["document.write()","console.log()","window.alert()","All of the above"],
            key: 3
        },

        {
            question_id: 5,
            prompt: "How can a datatype be declared to be a constant type?",
            distractors: ["const","var","let","constant"],
            key: 0
        }


      ];

// starts the questionIndex at zero 
var questionIndex = 0; 

// function that is called when needed to properly display the prompt and the various distractors
function DisplayQuestion() {
    document.getElementById("question-id").innerHTML = questions[questionIndex].question_id + '.  ' + questions[questionIndex].prompt
    document.getElementById("distractor-1-btn").innerHTML = 'A. ' + questions[questionIndex].distractors[0]
    document.getElementById("distractor-2-btn").innerHTML = 'B. ' + questions[questionIndex].distractors[1]
    document.getElementById("distractor-3-btn").innerHTML = 'C. ' + questions[questionIndex].distractors[2]
    document.getElementById("distractor-4-btn").innerHTML = 'D. ' + questions[questionIndex].distractors[3]
}

// When the gameStart button is clicked this function is implemented.
document.getElementById("gameStart").addEventListener("click", function(){
    DisplayQuestion()
    var timeLeft = 100;
    // These two lines hide the initial view and start displaying the questions.
    startQuizEl.setAttribute("style", "visibility: hidden; width: 0; height: 0; display: none")
    quizEl.setAttribute("style", "visibility: visible; width: 100%; height: 100%")
    // This function begin the countdown to zero and decreases the time every 1000 milliseconds 
    var timeDecrease = setInterval(function() {
        if (timeLeft > 0) {
        
            timerEl.textContent = 'Time: ' + timeLeft;

            timeLeft--;
        } else {
            clearInterval(timeDecrease)
            timerEl.textContent = 'Game Over!';
        }

    }, 1000)
    // These series of functions scores the items as correct or incorrect and takes the appropriate actions depending on which distractors were selected.
    document.getElementById("distractor-1-btn").addEventListener("click", function(){
        var answer = 0;
        if (answer === questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Correct - You Rock!'
            questionIndex += 1;
            if (questionIndex < 5) {
                return DisplayQuestion()
            } else {
                var quizScore = timeLeft;
                localStorage.setItem("score", quizScore)
                clearInterval(timeDecrease)
                timerEl.textContent = 'Game Over!';
                return LogScore()
            }

        }
        if (answer != questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Incorrect - Try Again!'
            timeLeft-=10;
        }
        
        }
    )

    document.getElementById("distractor-2-btn").addEventListener("click", function(){
        var answer = 1;
        if (answer === questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Correct - You Rock!'
            questionIndex += 1;
            if (questionIndex < 5) {
                return DisplayQuestion()
            } else {
                var quizScore = timeLeft;
                localStorage.setItem("score", quizScore)
                clearInterval(timeDecrease)
                timerEl.textContent = 'Game Over!';
                return LogScore()
            }
        }
        if (answer != questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Incorrect - Try Again!'
            timeLeft-=10;
        }
        
        }
    )

    document.getElementById("distractor-3-btn").addEventListener("click", function(){
        var answer = 2;
        if (answer === questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Correct - You Rock!'
            questionIndex += 1;
            if (questionIndex < 5) {
                return DisplayQuestion()
            } else {
                var quizScore = timeLeft;
                localStorage.setItem("score", quizScore)
                clearInterval(timeDecrease)
                timerEl.textContent = 'Game Over!';
                return LogScore()
            }

        }
        if (answer != questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Incorrect - Try Again!'
            timeLeft-=10;
        }
        
        }
    )

    document.getElementById("distractor-4-btn").addEventListener("click", function(){
        var answer = 3;
        if (answer === questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Correct - You Rock!'
            questionIndex += 1;
            if (questionIndex < 5) {
                return DisplayQuestion()
            } else {
                var quizScore = timeLeft;
                localStorage.setItem("score", quizScore)
                clearInterval(timeDecrease)
                timerEl.textContent = 'Game Over!';
                return LogScore()
            }
        }
        if (answer != questions[questionIndex].key) {
            rightOrWrongEl.textContent = 'Incorrect - Try Again!'
            timeLeft-=10;
        }
        
        }
    )



}

)

// This function displays the final score and upon submission of the person's initials triggers the high score function.
function LogScore() {
    quizEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    scoreEl.setAttribute("style", "visibility: visible; width: 100%; height: 100%")
    var finalScoreEl = document.getElementById("final-score")
    finalScoreEl.innerHTML = 'Your Score is: ' + localStorage.getItem("score")
    finalScoreEl.setAttribute("style", "font-size: 28px; font-weight: bold")
    scoreButtonEl.addEventListener("click", highScores);
}

// This function stores the person's score and then places it into a high score table. 
function highScores() {
    var initials = document.querySelector("#initial-text").value.trim();
    startQuizEl.setAttribute("style", "visibility: hidden; width: 0; height: 0; display: none")
    scoreEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    highScoreEl.setAttribute("style", "visibility: visible; width: 100%; height: 100%")
    viewHighScoresEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    timerEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    codeQuizHeaderEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    var quiztaker = {
        initials : initials,
        score : localStorage.getItem("score")
    }
// retreives the logged scores from localstorage
    var loggedScores = JSON.parse(localStorage.getItem("loggedScores"));   
        
        if(loggedScores){
            loggedScores.push(quiztaker); 
        }
        else{
            loggedScores = [quiztaker];    
        }
   // Sorts all the logged scores from highest to lowest  
   var loggedScores = loggedScores.sort((a, b) => b.score - a.score)

    // re-logs the scores into localstorage   
    localStorage.setItem("loggedScores",JSON.stringify(loggedScores));
    
    // table rows are created depending on the length of the array stored in localstorage
    var tableRows = 0;
    if(loggedScores) {
        tableRows = loggedScores.length;      
    }

    for (var i = 0; i < tableRows ; i++) {
            
        // creates a table row
        var row = document.createElement("tr");
    
        var tableInitials = loggedScores[i].initials;
        var tableScore = loggedScores[i].score;
        var tableRank = i + 1;
         
        // Creates a <td> element so the row level data can be added to the table
        var cell = document.createElement("td");
        var cellText = document.createTextNode(tableRank);
        cell.appendChild(cellText);
        row.appendChild(cell);       
        
        var cell1 = document.createElement("td");
        var cellText1 = document.createTextNode(tableInitials);
        cell1.appendChild(cellText1);
        row.appendChild(cell1);

        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(tableScore);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);
  
        var tableHS = document.querySelector("#high-score-table")
        // add the row to the end of the table body
        tableHS.appendChild(row);
        // clear the data in local storage
        clearButtonEl.addEventListener("click",function(){
            localStorage.clear();
        });
    }
}

// This function is specifically for the view high scores link. 
// It hides all the other elements and recreated the high score table that was made in the previous function
// This section violated best practices in coding... but, I just needed to get this done and will come back to fix this up at a later date.  
viewHighScoresEl.addEventListener("click",function(){
    startQuizEl.setAttribute("style", "visibility: hidden; width: 0; height: 0; display: none")
    quizEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    scoreEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    highScoreEl.setAttribute("style", "visibility: visible; width: 100%; height: 100%")
    viewHighScoresEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    timerEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    codeQuizHeaderEl.setAttribute("style", "visibility: hidden; width: 0%; height: 0%; display: none")
    var loggedScores = JSON.parse(localStorage.getItem("loggedScores"));   

   
    var tableRows = 0;
    if(loggedScores) {
        tableRows = loggedScores.length;      
    }

    for (var i = 0; i < tableRows ; i++) {
            
        var row = document.createElement("tr");
    
        var tableInitials = loggedScores[i].initials;
        var tableScore = loggedScores[i].score;
        var tableRank = i + 1;

        var cell = document.createElement("td");
        var cellText = document.createTextNode(tableRank);
        cell.appendChild(cellText);
        row.appendChild(cell);   
        
        var cell1 = document.createElement("td");
        var cellText1 = document.createTextNode(tableInitials);
        cell1.appendChild(cellText1);
        row.appendChild(cell1);

        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(tableScore);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);
  
        var tableHS = document.querySelector("#high-score-table")

        tableHS.appendChild(row);

        clearButtonEl.addEventListener("click",function(){
            localStorage.clear();
        });
    }
}
)