const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tabular Markup Language",
      "None of these",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
];

let currentquestion = 0;
let score = 0;
let timer;
let timeleft = 60;
let selected = false;

const q1 = document.getElementById("question");
const o1 = document.getElementById("options");
const btn1 = document.getElementById("btn");
const time = document.getElementById("timer");
const scoreconatiner = document.getElementById("score-container");
const score1 = document.getElementById("score");
const liveScore = document.getElementById("live-score");
const restartBtn = document.getElementById("restart");

function start() {
  timeleft = 60;
  time.textContent = `Time Left: ${timeleft}s`;

  timer = setInterval(() => {
    timeleft--;
    time.textContent = `Time Left: ${timeleft}s`;

    if (timeleft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      nextquestion();
    }
  }, 1000);
}

function showquestion() {
  clearInterval(timer);
  start();

  const questions1 = questions[currentquestion];

  q1.textContent = questions1.question;
  o1.innerHTML = "";
  selected = false;

  questions1.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectOption(btn, option));
    o1.appendChild(btn);
  });

  btn1.disabled = true;
}

function selectOption(button, selectedOption) {
  if (selected) return;
  selected = true;
  const correct = questions[currentquestion].answer;
  const allButtons = o1.querySelectorAll("button");

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === selectedOption) {
      btn.classList.add("wrong");
    }
  });

  if (selectedOption === correct) {
    updateScore();
  }

  btn1.disabled = false;
}

function updateScore() {
  score += 1;
  liveScore.textContent = `Score: ${score}`;
}

function nextquestion() {
  currentquestion++;
  if (currentquestion < questions.length) {
    showquestion();
  } else {
    clearInterval(timer);
    showscore();
  }
}

function showscore() {
  document.querySelector(".quiz-container").classList.add("hide");
  scoreconatiner.classList.remove("hide");
  score1.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentquestion = 0;
  score = 0;
  liveScore.textContent = "Score: 0";
  document.querySelector(".quiz-container").classList.remove("hide");
  scoreconatiner.classList.add("hide");
  showquestion();
}

btn1.addEventListener("click", nextquestion);
restartBtn.addEventListener("click", restartQuiz);

showquestion();