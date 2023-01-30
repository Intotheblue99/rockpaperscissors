let selection = ['rock', 'paper', 'scissors'];
let playerChoices = [];
let roundCount = 0
let myPoint = 0;
let cpuPoint = 0;
let round = '';
let gameWinner;
let player;
const buttons = document.querySelectorAll('[data-choice]');

let roundEl = document.querySelector('.round');
let roundWinnerEl = document.querySelector('.rnd-winner');
let gameWinnerEl = document.querySelector('.game-winner');
let myScore = document.querySelector('.player-score');
let cpuScore = document.querySelector('.cpu-score');
let playerEl = document.querySelector('.plcard');
let cpuEL = document.querySelector('.cpucard');


function getComputerChoice() {
    let comCho = Math.floor(Math.random() * selection.length)
    return selection[comCho]
};

function getPlayerChoice(index) {
    if (index === '0') {
        player= 'rock';
    } if (index === '1') {
        player= 'paper';
    } if (index === '2') {
        player= 'scissors';
    }
  };

  

function game() {
    let computer = getComputerChoice();
    playerChoices = [player,computer]
    
    roundCount++
    
    if (player === 'rock' && computer === 'paper') {
        cpuPoint++
        round = 'you lose, paper covers rock';
    }  if (player === 'paper' && computer === 'scissors') {
        cpuPoint++
        round = 'you lose, scissors cuts paper';
    } if ( player === 'scissors' && computer === 'rock') {
        cpuPoint++
        round = 'you lose, rock crushes scissors';
    } if (player === 'rock' && computer === 'scissors') {
        myPoint++
        round = 'YOU WIN! rock crushes scissors';
    } if (player === 'paper' && computer === 'rock') {
        myPoint++
        round = 'YOU WIN! paper covers rock';
    } if (player === 'scissors' && computer === 'paper') {
        myPoint++
        round = 'YOU WIN! scissors cuts paper';
    } if (player === 'rock' && computer === 'rock') {
        round = 'DRAW: rock & rock'
    } if (player === 'paper' && computer === 'paper') {
        round = 'DRAW: paper & paper'
    } if (player === 'scissors' && computer === 'scissors') {
        round = 'DRAW: scissors & scissors'
    }
    
    roundEl.textContent= 'ROUND: ' + roundCount;
    myScore.textContent= 'player score: ' + myPoint;
    cpuScore.textContent= 'cpu-score: ' + cpuPoint;
    playerEl.textContent= 'PLAYER:   ' + player;
    cpuEL.textContent= 'CPU:   ' + computer;
    roundWinnerEl.textContent= round;
    gameWinnerEl.textContent = '';

    playRound();
}



function playRound() {
    if (roundCount === 5) {
        if (myPoint > cpuPoint) {
            gameWinner = 'PLAYER WINS GAME'
        } else if (myPoint === cpuPoint) {
            gameWinner = 'DRAW, NO ONE WINS GAME'
        } else {
            gameWinner = 'CPU WINS GAME'
        } 
        gameWinnerEl.textContent = gameWinner
        reset();
    }
};

function reset() {
    roundCount = 0;
    myPoint = 0;
    cpuPoint = 0;
}

buttons.forEach(button => button.addEventListener('click', game));




