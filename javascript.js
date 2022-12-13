let selection = ['rock', 'paper', 'scissors']
let playerChoices = []
let playerScore = 0
let cpuScore = 0
let round = ''
let gameWinner = ''

function getComputerChoice() {
    let comCho = Math.floor(Math.random() * selection.length)
    return selection[comCho]
}

function game() {
    let player = prompt('CHOOSE: rock, paper, scissors').toLowerCase();
    let computer = getComputerChoice();
    playerChoices = ['PLAYER: ' + player,'CPU: ' + computer];
    
    if (player === 'rock' && computer === 'paper') {
        cpuScore++
        round = 'you lose, paper covers rock';
        
    }  if (player === 'paper' && computer === 'scissors') {
        cpuScore++
        round = 'you lose, scissors cuts paper';
        
    } if ( player === 'scissors' && computer === 'rock') {
        cpuScore++
        round = 'you lose, rock crushes scissors';
        
    } if (player === 'rock' && computer === 'scissors') {
        playerScore++
        round = 'YOU WIN! rock crushes scissors';
        
    } if (player === 'paper' && computer === 'rock') {
        playerScore++
        round = 'YOU WIN! paper covers rock';
        
    } if (player === 'scissors' && computer === 'paper') {
        playerScore++
        round = 'YOU WIN! scissors cuts paper';
        
    } if (player === 'rock' && computer === 'rock') {
        round = 'DRAW: rock & rock'
    } if (player === 'paper' && computer === 'paper') {
        round = 'DRAW: paper & paper'
    } if (player === 'scissors' && computer === 'scissors') {
        round = 'DRAW: scissors & scissors'
    }
    console.log(playerChoices)
    console.log(round)
}

function playRound() {
    for (i = 0; i < 5; i++) {
        game(i)
    };
    if (playerScore > cpuScore) {
        gameWinner = 'PLAYER WINS GAME'
    } else if (playerScore === cpuScore) {
        gameWinner = 'DRAW, NO ONE WINS GAME'
    } else {
        gameWinner = 'CPU WINS GAME'
    }
}
playRound()


console.log('ME:' + playerScore, 'CPU:' + cpuScore)
console.log(gameWinner)