let selection = ['rock', 'paper', 'scissors']
let computer = getComputerChoice()
let playerChoice = 'paper'
let player = playerChoice

console.log('ME: ' + player)
console.log('CPU: ' + computer)

function getComputerChoice() {
    let comCho = Math.floor(Math.random() * selection.length)
    return selection[comCho]
}


function playRound() {
    if (player === 'rock' && computer === 'paper') {
        return 'you lose, paper covers rock'
    } else if (player === 'paper' && computer === 'scissors') {
        return 'you lose, scissors cuts paper'
    } else if ( player === 'scissors' && computer === 'rock') {
        return 'you lose, rock crushes scissors'
    } else if (player === 'rock' && computer === 'scissors') {
        return 'YOU WIN! rock crushes scissors'
    } else if (player === 'paper' && computer === 'rock') {
        return 'YOU WIN! paper covers rock'
    } else if (player === 'scissors' && computer === 'paper') {
        return 'YOU WIN! scissors cuts paper'
    } else if (player === 'rock' && computer === 'rock') {
        return 'DRAW: rock & rock'
    } else if (player === 'paper' && computer === 'paper') {
        return 'DRAW: paper & paper'
    } else if (player === 'scissors' && computer === 'scissors') {
        return 'DRAW: scissors & scissors'
    }
}
console.log(playRound())