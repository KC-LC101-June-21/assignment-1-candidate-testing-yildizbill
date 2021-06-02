const input = require('readline-sync')

let candidateName= "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?",
"True or false: 5 kilometer == 5000 meters?",
"(5 + 3)/2 * 10 = ?",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
"What is the minimum crew size for the ISS?"
];
let correctAnswers = [	"Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

function askForName(){
candidateName = input.question("Please enter your name: ");
}

function askQuestion(){
  for(let i=0; i<questions.length; i++){
    candidateAnswers.push(input.question(questions[i]))
  }
}


function gradeQuiz(candidateAnswers){

console.log("Candidate Name: "+candidateName);
let count=0;
let grade=0;

for(let i=0; i<questions.length; i++){

  console.log(`Question ${questions[i]}`);
  console.log(`Your answer ${candidateAnswers[i]}`);
  console.log(`Correct answer ${correctAnswers[i]}`);
  console.log();


if(candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase()){
  count++;

}
}

grade = (count/questions.length)*100;

if(grade>=80){
console.log(">>>Congratulations, you have passed! <<< ")
}
else{
  console.log("You Failed!");
}

console.log(`>>> Overall Grade: ${grade}% (${count} of 5 responses correct) <<<`);


}







function runProgram(){
  askForName();
  console.log("Hello candidate "+candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}



module.exports = {
  candidateName : candidateName,
  question : question,
  correctAnswer : correctAnswer,
  candidateAnswer : candidateAnswer,
  questions : questions,
  candidateAnswers : candidateAnswers,
  correctAnswers : correctAnswers,
  gradeQuiz : gradeQuiz,
  runProgram : runProgram
};