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

const computerSelection = getComputerChoice();
const playerSelection = prompt('Make your play: rock, paper or scissors').toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw - both chose ${playerSelection}`
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return `You win - ${playerSelection} beats ${computerSelection}`
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    return `You lose - ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();