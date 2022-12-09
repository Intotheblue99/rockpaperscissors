let selection = ['rock', 'paper', 'scissors']
let computer = getComputerChoice()

function getComputerChoice() {
    let comCho = Math.floor(Math.random() * selection.length)
    return selection[comCho]
}
console.log(getComputerChoice())