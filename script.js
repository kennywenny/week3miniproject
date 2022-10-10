console.log('Hello world')

const userChoice = prompt('Please make your choice of R, P or S')

const computerChoice = getComputerChoice()

if (userChoice === 'R' && computerChoice === 'S') {
  userWins()
}
if (userChoice === 'R' && computerChoice === 'P') {
  computerWins()
}
if (userChoice === 'S' && computerChoice === 'R') {
  computerWins()
}
if (userChoice === 'S' && computerChoice === 'P') {
  userWins()
}
if (userChoice === 'P' && computerChoice === 'R') {
  userWins()
}
if (userChoice === 'P' && computerChoice === 'S') {
  computerWins()
}
if (userChoice === computerChoice) {
  draw()
}

console.log(`You chose ${userChoice}`)
console.log(`I chose ${computerChoice}`)

function userWins() {
  alert('You won!')
}

function computerWins() {
  alert('I won!')
}

function draw() {
  alert('We drew!')
}

function getComputerChoice() {
  return 'R' //TODO: Make random
}