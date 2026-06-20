let userScore = 0;
let computerScore = 0;

const handImages = {
    rock: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/270a.svg",
    paper: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/270b.svg",
    scissors: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/270c.svg"
};

const userHandEl = document.getElementById("user-hand");
const computerHandEl = document.getElementById("computer-hand");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function play(userChoice) {
    const computerChoice = getComputerChoice();

    userHandEl.innerHTML = `<img src="${handImages[userChoice]}" width="80">`;
    computerHandEl.innerHTML = `<img src="${handImages[computerChoice]}" width="80">`;

    userHandEl.classList.add("shake");
    computerHandEl.classList.add("shake");

    setTimeout(() => {

        // Remove shake after animation
        userHandEl.classList.remove("shake");
        computerHandEl.classList.remove("shake");

        let resultText = "";

        if (userChoice === computerChoice) {
            resultText = "🤝 It's a Draw!";
        } 
        else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            resultText = "🎉 You Win!";
            userScore++;
        } 
        else {
            resultText = "💻 Computer Wins!";
            computerScore++;
        }

        resultEl.textContent = resultText;
        userScoreEl.textContent = userScore;
        computerScoreEl.textContent = computerScore;

    }, 500); 
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    userScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;

    resultEl.textContent = "Make your move!";

    userHandEl.innerHTML = `<img src="${handImages.rock}" width="80">`;
    computerHandEl.innerHTML = `<img src="${handImages.rock}" width="80">`;
}