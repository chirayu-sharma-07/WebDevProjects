//Question bank
var questionBank= [
    {
        question : 'Who invented C language ?',
        option : ['Charles Babbage','Grahambel','Steve Jobs','Dennis Ritchie'],
        answer : 'Dennis Ritchie'
    },
    {
        question : 'How many primitive data types are there in java ?',
        option : ['Six','Eight','Nine','Four'],
        answer : 'Eight'
    },
    {
        question : 'When an array is passed to a method, what does the method receive ?',
        option : ['The reference of the array','A copy of the array','Length of the array','Copy of first element'],
        answer : 'The reference of the array'
    },
    {
        question : 'Who developed Python Programming Language ?',
        option : ['Wick van Rossum','Rasmus Lerdorf','Guido van Rossum','Niene Stom'],
        answer : 'Guido van Rossum'
    },
    {
        question : 'Javascript is an _______ language ?',
        option : ['Object-Based','Object-Oriented','Procedural','None of the above'],
        answer : 'Object-Oriented'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();