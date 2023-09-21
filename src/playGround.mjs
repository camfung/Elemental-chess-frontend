import * as Chess from './chess.mjs';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let whiteElements = [
  ['Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting'],
  ['Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal']
];


let blackElements = [
  ['Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting'],
  ['Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting', 'Fighting']
];


const chess = new Chess.Chess(whiteElements, blackElements);


async function inp() {
  return new Promise((resolve) => {
    rl.question('from: ', (from) => {
      rl.question('to: ', (to) => {
        resolve({ from, to });
      });
    });
  });
}

async function main() {
  while (!chess.isGameOver()) {
    const { from, to } = await inp();
    try {
      chess.move({ from, to });
    } catch (error) {
      console.log(`${from} to ${to} failed`);
      console.log(error)
    }
    console.log(chess.ascii());
    console.log(chess._record.recordString)
    
    //chess.stateType('e4')
  }

  rl.close();
}

function EPtest(sq){
  console.log(chess.enPassantSpotConversion(sq))
  return
}

//main();
EPtest('e4')
