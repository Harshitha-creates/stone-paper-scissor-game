// Sound files
const winSound = new Audio("sounds/win.wav");
const loseSound = new Audio("sounds/lose.wav");
const clickSound = new Audio("sounds/click.wav");

let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  // Play the button click sound
  clickSound.play();

  const items = ["rock", "paper", "scissor"];
  const computerChoice = items[Math.floor(Math.random() * items.length)];

  document.getElementById("userChoice").innerText = `Your choice: ${getEmoji(userChoice)} ${userChoice}`;
  document.getElementById("computerChoice").innerText = `Computer's choice: ${getEmoji(computerChoice)} ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a tie! 🤝😐";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      result = "You lost! 😢💔";
      computerScore++;
      loseSound.play(); // Play lose sound
    } else {
      result = "Yahooo, you won! 🎉🥳";
      userScore++;
      winSound.play(); // Play win sound
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      result = "You lost! 😢💔";
      computerScore++;
      loseSound.play(); // Play lose sound
    } else {
      result = "Yahooo, you won! 🎉🥳";
      userScore++;
      winSound.play(); // Play win sound
    }
  } else if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      result = "You lost! 😢💔";
      computerScore++;
      loseSound.play(); // Play lose sound
    } else {
      result = "Yahooo, you won! 🎉🥳";
      userScore++;
      winSound.play(); // Play win sound
    }
  } else {
    result = "Invalid input! 🚫 Choose rock, paper, or scissor.";
  }

  document.getElementById("resultText").innerText = result;
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;

  // Disable buttons after a play
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach(btn => btn.disabled = true);
}

function resetGame() {
  document.getElementById("userChoice").innerText = "";
  document.getElementById("computerChoice").innerText = "";
  document.getElementById("resultText").innerText = "";

  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach(btn => btn.disabled = false);
}

// Helper function for emoji based on choice
function getEmoji(choice) {
  switch (choice) {
    case "rock": return "🪨";
    case "paper": return "📄";
    case "scissor": return "✂️";
    default: return "";
  }
}
