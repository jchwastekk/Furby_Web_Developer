// select elements from the DOM
const furby = document.querySelector("#furby");
const livesEl = document.querySelector("#lives");
const questionSection = document.querySelector("#question-section");
const page = document.querySelector("body");
// initialize game state
let lives = 10;
let currentQuestionIndex = 0;

// display the current question and answer choices
function displayQuestion() {
  const {
    question,
    correctAnswer,
    incorrectAnswers
  } = questions[currentQuestionIndex];

  // create an array of all the answers, with the correct answer at a random index
  const answers = [...incorrectAnswers];
  const correctAnswerIndex = Math.floor(Math.random() * (answers.length + 1));
  answers.splice(correctAnswerIndex, 0, correctAnswer);

  // create the HTML for the answer choices
  const answerHTML = answers.map((answer, index) => {
    const id = index === correctAnswerIndex ? "correct" : "incorrect";
    return `<li id="${id}">${answer}</li>`;
  }).join("");

  // display the question and answers
  questionSection.innerHTML = `
    <p id="question">${question}</p>
    <ul>${answerHTML}</ul>
  `;
}

// check if the user's answer is correct
function checkAnswer(event) {
  const target = event.target;
  if (target.matches("li")) {
    if (target.id === "correct") {
      // correct answer
      generateFruit();
      playSound("assets/sounds/yeees.wav");
      shakeEffect();
    } else {
      // incorrect answer
      lives--;
      livesEl.textContent = lives;
      playSound("assets/sounds/wrong2.wav");
      furbyJump();
      shakeEffect();
    }
    // move on to the next question or end the game
    if (currentQuestionIndex === questions.length - 1 || lives <= 0) {
      endGame();
    } else {
      currentQuestionIndex++;
      displayQuestion();
    }
  }
}

function generateFruit() {
  const fruits = ["apple", "pear", "plum", "pineapple", "potato", "broccoli", "cucumber"];
  const randomIndex = Math.floor(Math.random() * fruits.length);
  const fruit = fruits[randomIndex];

  // create an image element for the fruit
  const fruitImg = document.createElement("img");
  fruitImg.src = `assets/img/` + `${fruit}.png`;
  fruitImg.alt = fruit;
  fruitImg.classList.add("fruit");

  // Set the starting position and size of the fruit based on the window size
  fruitImg.style.top = (Math.random() * (window.innerHeight + fruitImg.offsetHeight) - fruitImg.offsetHeight) + window.scrollY + 'px';
  fruitImg.style.left = (Math.random() * (window.innerWidth + fruitImg.offsetWidth) - fruitImg.offsetWidth) + window.scrollX + 'px';
  fruitImg.style.transform = 'translateX(' + (Math.random() * 2 - 1) + '%) translateY(' + (Math.random() * 2 - 1) + '%) scale(' + (150 - 120 * Math.random()) + '%)';
  fruitImg.style.animation = "appear 3s";

  // display the fruit next to Furbi for 3 seconds
  furby.appendChild(fruitImg);
  setTimeout(() => {
    fruitImg.remove();
  }, 3000);
}




// make the page shake
function shakeEffect() {
  const page = document.body;
  page.classList.add("shake");
  setTimeout(() => {
    page.classList.remove("shake");
  }, 1000);
}

// make Furbi jump
function furbyJump() {
  furby.classList.add("jump");
  setTimeout(() => {
    furby.classList.remove("jump");
  }, 1000);
}

// end the game
function endGame() {
  if (lives > 0) {
    // game won
    // display a message and allow the player to restart the game
    questionSection.innerHTML = `
      <h2>You won!</h2>
      <button id="restart-button">Play Again</button>
    `;
  } else {
    // game lost
    // display a message and allow the player to restart the game
    questionSection.innerHTML = `
      <h2>Game Over</h2>
      <button id="restart-button">Try Again</button>
    `;
    // flash the page red
    page.classList.add("flash");
  }
  // add a click event listener to the restart button
  document.querySelector("#restart-button").addEventListener("click", restartGame);


}



// restart the game
function restartGame() {
  lives = 10;
  currentQuestionIndex = 0;
  displayQuestion();
  playSound("assets/sounds/jump.wav");
  // remove the flash effect if it's applied
  page.classList.remove("flash");
}

// play a sound effect
function playSound(src) {
  const audio = new Audio(src);
  audio.play();
}

// start the game
displayQuestion();
questionSection.addEventListener("click", checkAnswer);
