import * as Chess from './chess.mjs';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let whiteElements = [
  ['Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal'],
  ['Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal']
];


let blackElements = [
  ['Rock', 'Rock', 'Rock', 'Rock', 'Rock', 'Rock', 'Rock', 'Rock'],
  ['Rock', 'Rock', 'Rock', 'Ghost', 'Rock', 'Rock', 'Rock', 'Rock']
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

async function SEinp() {
  return new Promise((resolve) => {
    rl.question('to: ', (to) => {
      resolve({ to });
    });
  });
}

async function main() {
  let capType = 'regular'
  while (!chess.isGameOver()) {
    if (capType !== 'regular'){
      capType = await SEturn(capType)
    } else {
      capType = await turn()
    }
    console.log(chess.ascii());
  }

  rl.close();
}

async function turn(){
  const { from, to } = await inp();
  let capType
    try {
      capType = chess.move({ from, to });
    } catch (error) {
      console.log(`${from} to ${to} failed`);
      console.log(error)
      return 'regular'
    }
    return capType
}

async function SEturn(from) {
  const { to } = await SEinp();
  let capType;
  try {
    capType = chess.move({ from, to });
  } catch (error) {
    console.log(`${from} to ${to} failed`);
    console.log(error);
    capType = from
  }
  return capType;
}

function skip(){
  chess._turn = chess.swapColor(chess._turn)
}

main();
