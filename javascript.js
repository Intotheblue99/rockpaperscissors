let selection = ['rock', 'paper', 'scissors']
let choices = []
let playerScore = 0
let cpuScore = 0
let round = ''
let gameWinner = ''
//let playerChoice = 'paper'
//let player = playerChoice

console.log('ME: ' + player)
console.log('CPU: ' + computer)



function getComputerChoice() {
    let comCho = Math.floor(Math.random() * selection.length)
    return selection[comCho]
}

// temporary//
 function getPlayerChoice() {
     let plaCho = Math.floor(Math.random() * selection.length)
     return selection[plaCho]
 }


function playRound() {
    
    if (player === 'rock' && computer === 'paper') {
        cpuScore++
        return 'you lose, paper covers rock';
        
    }  if (player === 'paper' && computer === 'scissors') {
        cpuScore++
        return 'you lose, scissors cuts paper';
        
    } if ( player === 'scissors' && computer === 'rock') {
        cpuScore++
        return 'you lose, rock crushes scissors';
        
    } if (player === 'rock' && computer === 'scissors') {
        playerScore++
        return 'YOU WIN! rock crushes scissors';
        
    } if (player === 'paper' && computer === 'rock') {
        playerScore++
        return 'YOU WIN! paper covers rock';
        
    } if (player === 'scissors' && computer === 'paper') {
        playerScore++
        return 'YOU WIN! scissors cuts paper';
        
    } if (player === 'rock' && computer === 'rock') {
        return 'DRAW: rock & rock'
    } if (player === 'paper' && computer === 'paper') {
        return 'DRAW: paper & paper'
    } if (player === 'scissors' && computer === 'scissors') {
        return 'DRAW: scissors & scissors'
    }
}

console.log(playRound())

function game() {
    for (i = 0; i < 5; i++) {
        playRound(i)
    };
    if (playerScore > cpuScore) {
        console.log('PLAYER WINS GAME')
    } else {
        console.log('CPU WINS GAME')
    }
}
game()

console.log('ME:' + playerScore)
console.log('CPU:' + cpuScore)



//console.log('CPU SCORE: ' + cpuScore)
//console.log('PLAYER SCORE: ' + playerScore)

//if (cpuWin === true) {
//   cpuWin += 1 
