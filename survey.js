const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionsArray = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

const questionsAnswers = [];
let currentQuestion = 0;

const generateQuestions = (answer) => {
  if (currentQuestion >= questionsArray.length - 1) {
    questionsAnswers.push(answer);

    console.log(`${questionsAnswers[0]} likes to ${questionsAnswers[1]} while listening to
    ${questionsAnswers[2]}. ${questionsAnswers[0]} likes ${questionsAnswers[4]} for ${questionsAnswers[3]}, and prefers 
    ${questionsAnswers[5]} over any other sport, and has superpower at ${questionsAnswers[6]}.`);

    rl.close();
  } else {
    currentQuestion++;
    questionsAnswers.push(answer);
    rl.question(questionsArray[currentQuestion], generateQuestions);
  }
};

rl.question(questionsArray[0], generateQuestions);
