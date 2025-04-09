
import { GameController } from "./src/gamecontroller"
import * as readline from 'readline'

const game = GameController(5,3)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function promptMove() {
  rl.question('Enter your move (row,col): ', (input) => {
    const [row, col] = input.split(',').map(Number)
    if (isNaN(row) || isNaN(col)) {
      console.log('Please enter valid numbers in format: row,col')
      promptMove()
      return
    }
    game.playRound([row, col])
    promptMove()
  })
}

promptMove()