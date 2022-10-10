let userWinsCount = 0
let ties = 0
let computerWinsCount = 0

const userChoice = prompt('Please make your choice of R, P or S')

const computerChoice = getComputerChoice()

alert(`You chose ${userChoice}, I chose ${computerChoice}`)

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

alert(`You have won ${userWinsCount} times, I have won ${computerWinsCount} times, and we've tied ${ties} times`)


function userWins() {
  userWinsCount++
  alert('You won!')
}

function computerWins() {
  computerWinsCount++
  alert('I won!')
}

function draw() {
  ties++
  alert('We drew!')
}

function getComputerChoice() {
  return 'R' //TODO: Make random
}