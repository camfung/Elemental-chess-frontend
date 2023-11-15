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
    //console.log(chess._record.recordString)
    //console.log(chess._record.unpack(chess._record.packedArray[chess._record.packedArray.length - 1]))
    console.log(chess._record.packedArray)
    
    //chess.stateType('e4')
  }

  rl.close();
}

function EPtest(sq){
  console.log(chess.enPassantSpotConversion(sq))
  return
}

function packCheck(){
  let check = chess._record.pack('e3', 'e5')
  //console.log(check)
  console.log(chess._record.unpack(check))

  check = chess._record.pack('d5', 'd7')
  //console.log(check)
  console.log(chess._record.unpack(check))
}

function stepCheck(){
  const array = [ 1804, 2291, 2268 ]
  const chsss = new Chess.Chess(blackElements, whiteElements, 'something', array)
  chsss.stepThrough()
  chsss.ascii()
  chsss.stepThrough()
  chsss.ascii()
}

function check(from, to){
  let n = chess._record.pack(from, to)
  console.log(1148 & 0b11111)
  console.log(n)
  console.log(chess._record.unpack(n))
}


// main();
//check('d5', 'd7')

// stepCheck();
const array = [1804, 2291, 2268]
for(let i = 0; i < array.length; i++){
  chess.move((chess._record.unpack(array[i])))
  chess.ascii()
}

