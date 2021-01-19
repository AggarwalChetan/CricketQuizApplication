console.log('Welcome to CricketQuiz\n');

// Total Number of questions in the quiz
const NUM_OF_QUESTIONS = 5;

// quiz object that contains questions, options and answers
const quizApplication = {
  question : [
    'What does LBW stand for?',
    'Who did England beat in the final of the 2019 Cricket World Cup?',
    'What is a cricket ball made out of?',
    'Why are white cricket balls used during one day internationals?',
    'Who is the king of IPL team?'
  ],
  options : [
    ['Long Ball Wide', 'Leg Beyond Width', 'Leg Before Wicket', 'Lol \'Bout to Win'],
    ['Australia', 'India', 'New Zealand', 'Sri Lanka'],
    ['Leather, rubber and plastic', 'Cork, string and Leather', 'Wood, plastic and cardboard', 'Leather, spam and tin foil'],
    ['So players can remember that they\'re not playing a test Match', 'So they\'re more visible in the evening', 'Bcuz Cricket Association does not like red', 'Someone thought it would be a fun'],
    ['Sachin Tendulkar', 'Virat Kohli', 'Yuvraj Singh', 'Mahendra Singh Dhoni']
  ],
  result : [3,3,2,2,4]
};

// getting object to read input
const readLineSync = require('readline-sync');

// function that print questions and options on console
function printQuizQuestion(questionNumber, question, options){
  return readLineSync.question(`Q${questionNumber}. ${question}\n1. ${options[0]}\n2. ${options[1]}\n3. ${options[2]}\n4. ${options[3]}\n\nEnter your option : `);
}

// function that print result on console
function printQuizResult(ans, result){
  if(result == ans){
    console.log(`CORRECT ANSWER 😁\n`);
    return 1;
  }else{
    console.log(`OOPS!WRONG ANSWER 🙁\nCORRECT ANSWER IS: ${result}`);
  }
  return 0;
}

//loop responsible for iteration over all the questions
let totalScore = 0;
for(let i = 0; i < NUM_OF_QUESTIONS; ++i){
  totalScore += printQuizResult(printQuizQuestion(i + 1, quizApplication.question[i], quizApplication.options[i]), quizApplication.result[i]);
}

console.log(`Your Score is: ${totalScore}/${NUM_OF_QUESTIONS}\nHave a good day!😊`);