const buttons = document.querySelectorAll('.game__btn');
const playerChoiceImg = document.querySelector('.game__result-player img');
const computerChoiceImg = document.querySelector('.game__result-computer img');
const playerScoreboard = document.querySelector('.game__score-player');
const computerScoreboard = document.querySelector('.game__score-computer');
const playMessage = document.querySelector('.game__result-message');
const overlay = document.querySelector('.overlay');
const overlayBtn = document.querySelector('.overlay__btn');
let playerPoints = 0;
let computerPoints = 0;

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		playRound(e.target.closest('button').dataset.key, getComputerChoice());
	});
});

overlayBtn.addEventListener('click', restartGame);

function getComputerChoice() {
	const choice = getRandom(3);
	switch (choice) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
}

function getRandom(max) {
	return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		displayResult(playerSelection, computerSelection, null, `DRAW! BOTH CHOOSE ${playerSelection}.`);
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		displayResult(playerSelection, computerSelection, 'player', `YOU WIN! ${playerSelection} BEATS ${computerSelection}.`);
	} else if (
		(playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
	) {
		displayResult(playerSelection, computerSelection, 'computer', `YOU LOST! ${computerSelection} beats ${playerSelection}.`);
	}
}

function displayResult(playerSelection, computerSelection, winner, message) {
	playerChoiceImg.setAttribute('src',`/images/hand-${playerSelection}.svg`);
	computerChoiceImg.setAttribute('src', `/images/hand-${computerSelection}.svg`);
	playMessage.textContent = message;

	if (winner === 'player') {
		playerPoints += 1;
		playerScoreboard.textContent = playerPoints;
	} else if (winner === 'computer') {
		computerPoints += 1;
		computerScoreboard.textContent = computerPoints;
	}

	if (playerPoints === 5) {
		endGame('YOU WON!');
	} else if (computerPoints === 5) {
		endGame('YOU LOST!')
	}
}


function endGame(message) {
	showOverlay(message);
}

function restartGame() {
	playerPoints = 0;
	computerPoints = 0;
	playerScoreboard.textContent = 0;
	computerScoreboard.textContent = 0;
	playerChoiceImg.setAttribute('src', '/images/question.svg');
	computerChoiceImg.setAttribute('src', '/images/question.svg');
	playMessage.textContent = '⠀'; // empty unicode
	closeOverlay();
}

function showOverlay(message) {
	const overlayMessage = document.querySelector('.overlay__message');
	overlayMessage.textContent = message;
	overlay.classList.add('show');
}

function closeOverlay() {
	overlay.classList.remove('show');
}