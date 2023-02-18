var timerEl = document.querySelector('.timer')
var startQuizEl = document.querySelector('.start-quiz')
var quizEl = document.querySelector('.quiz')

// questions were copied from the following website: https://www.interviewbit.com/javascript-mcq/
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

      
console.log(questions[0].distractors[0])
console.log(questions.length)

document.getElementById("question-id").innerHTML = questions[0].question_id + '.  ' + questions[0].prompt
document.getElementById("distractor-1-btn").innerHTML = 'A. ' + questions[0].distractors[0]
document.getElementById("distractor-2-btn").innerHTML = 'B. ' + questions[0].distractors[1]
document.getElementById("distractor-3-btn").innerHTML = 'C. ' + questions[0].distractors[2]
document.getElementById("distractor-4-btn").innerHTML = 'D. ' + questions[0].distractors[3]

console.log(questions[0])
console.log(timerEl)
document.getElementById("gameStart").addEventListener("click", function(){
    var timeLeft = 100;
    startQuizEl.setAttribute("style", "visibility: hidden; width: 0; height: 0")
    quizEl.setAttribute("style", "visibility: visible; width: 100%; height: 100%")

    var timeDecrease = setInterval(function() {
        if (timeLeft > 0) {
        
            timerEl.textContent = 'Time: ' + timeLeft;

            timeLeft--;
            console.log(timeLeft)
        } else {
            clearInterval(timeDecrease)
            console.log(timeLeft)
            timerEl.textContent = 'Game Over!';
        }
    }, 1000)

}

)
