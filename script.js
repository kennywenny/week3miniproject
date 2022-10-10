console.log('Hello world')

const userChoice = prompt('Please make your choice of R, P or S')

const computerChoice = getComputerChoice()

console.log(`You chose ${userChoice}`)
console.log(`I chose ${computerChoice}`)

function getComputerChoice() {
  return 'R' //TODO: Make random
}