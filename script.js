console.log('Hello world')

const userChoice = prompt('Please make your choice of R, P or S')

const computerChoice = getComputerChoice()

if (userChoice === 'R' && computerChoice === 'S') {
  // user wins
}
if (userChoice === 'R' && computerChoice === 'P') {
  // computer wins
}
if (userChoice === 'S' && computeChoice === 'R') {
  // computer wins
}
if (userChoice === 'S' && computerChoice === 'P') {
  // user wins
}
if (userChoice === 'P' && computerChoice === 'R') {
  // user wins
}
if (userChoice === 'P' && computerChoice === 'S') {
  // computer wins
}
if (userChoice === computerChoice) {
  // draw
}

console.log(`You chose ${userChoice}`)
console.log(`I chose ${computerChoice}`)

function getComputerChoice() {
  return 'R' //TODO: Make random
}