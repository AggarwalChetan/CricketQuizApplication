const readLineSync = require('readline-sync');
const NUM_OF_QUESTIONS = 5;
const quizApplication = {
  question : [
    "What does LBW stand for?",
    "Who did England beat in the final of the 2019 Cricket World Cup?",
    "What is a cricket ball made out of?",
    "Why are white cricket balls used during one day internationals?",
    "Who is the king of IPL team?"
  ],
  options : [
    ["Long Ball Wide", "Leg Beyond Width", "Leg Before Wicket", "Lol 'Bout to Win"],
    ["Australia", "India", "New Zealand", "Sri Lanka"],
    ["Leather, rubber and plastic", "Cork, string and Leather", "Wood, plastic and cardboard", "Leather, spam and tin foil"],
    ["So players can remember that they're not playing a test Match", "So they're more visible in the evening", "Bcuz Cricket Association like's white", "Someone thought it would be a bit of fun"],
    ["Sachin Tendulkar", "Virat Kohli", "Yuvraj Singh", "Mahendra Singh Dhoni"]
  ],
  result : [3,3,2,2,4]
};

function printQuizQuestion(question, options, result){
  let score = 0;
  const ans = readLineSync.question(question + "\n1. " + options[0] + "\n2. " + options[1] + "\n3. " + options[2] + "\n4. " + options[3] + "\n\nPlease enter the answer : ");

  if(result == ans){
    console.log("CORRECT ANSWER 😁");
    score += 1;
  }else{
    console.log("OOPS!WRONG ANSWER 🙁");
    console.log("CORRECT ANSWER IS: " + result);
  }
  console.log();
  return score;
}

console.log("Welcome to CricketQuiz\n");
let totalScore = 0;

for(let i = 0; i < NUM_OF_QUESTIONS; ++i){
  totalScore += printQuizQuestion(quizApplication.question[i], quizApplication.options[i], quizApplication.result[i]);
}

console.log("Your Score is : " + totalScore + "/" + NUM_OF_QUESTIONS);