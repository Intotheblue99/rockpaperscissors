let selection = ['rock', 'paper', 'scissors']
let computer = getComputerChoice()
let player = prompt()
let playerScore = 0
let cpuScore = 0
let cpuWin = false
let playerWin = false
//let playerChoice = 'paper'
//let player = playerChoice

console.log('ME: ' + player)
console.log('CPU: ' + computer)



function getComputerChoice() {
    let comCho = Math.floor(Math.random() * selection.length)
    return selection[comCho]
}

// temporary//
// function getPlayerChoice() {
//     let plaCho = Math.floor(Math.random() * selection.length)
//     return selection[plaCho]
// }


function playRound(player, computer) {
    if (player === 'rock' && computer === 'paper') {
        cpuWin = true
        return 'you lose, paper covers rock';
        
    } else if (player === 'paper' && computer === 'scissors') {
        cpuWin = true
        return 'you lose, scissors cuts paper';
        //cpuWin = true
    } else if ( player === 'scissors' && computer === 'rock') {
        cpuWin = true
        return 'you lose, rock crushes scissors';
        //cpuWin = true
    } else if (player === 'rock' && computer === 'scissors') {
        playerWin = true
        return 'YOU WIN! rock crushes scissors';
        //playerWin = true
    } else if (player === 'paper' && computer === 'rock') {
        playerWin = true
        return 'YOU WIN! paper covers rock';
        //playerWin = true
    } else if (player === 'scissors' && computer === 'paper') {
        playerWin = true
        return 'YOU WIN! scissors cuts paper';
        //playerWin = true
    } else if (player === 'rock' && computer === 'rock') {
        return 'DRAW: rock & rock'
    } else if (player === 'paper' && computer === 'paper') {
        return 'DRAW: paper & paper'
    } else if (player === 'scissors' && computer === 'scissors') {
        return 'DRAW: scissors & scissors'
    }
}

console.log(playRound(player, computer))

function game() {
    playRound()
    for (i = 0; i < 5; i++) {
        playRound(i)
        prompt()
        if (playerWin === true) {
            console.log('round ' + [i] + ': WIN')
        } else {
            console.log('round ' + [i] + ': LOSS')
        }
        
   }
}
game()

//console.log('CPU SCORE: ' + cpuScore)
//console.log('PLAYER SCORE: ' + playerScore)

//if (cpuWin === true) {
//   cpuWin += 1 
