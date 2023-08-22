import React, { useEffect, useRef, useState } from 'react';
import * as Chess from '../../chess.mjs';
// import { Chessboard } from 'react-chessboard';
import * as chessboardModule from '../../dist/index.js';
import { customPieces } from '../../hooks/useCustomPieces';
import { Button, Paper } from '@mui/material';
const { Chessboard } = chessboardModule;


const ChessboardWrapper = (props) => {
    const {
        boardWidth,
        lightSquareColor = "rgb(219, 219, 219)",
        darkSquareColor = 'rgb(202, 0, 0)'
    } = props;
    const [fen, setFen] = useState("start");
    const [moveFrom, setMoveFrom] = useState("");
    const [moveTo, setMoveTo] = useState(null);
    const [SEflag, setSEflag] = useState(false)
    let whiteElements = [
        ["Electric", "Ground", "Rock", "Fire", "Flying", "Grass", "Ice", "Dark"], ["Psychic", "Water", "Fairy", "Normal", "Dragon", "Fighting", "Poison", "Ghost"]
    ];


    let blackElements = [
        ["Grass", "Fire", "Dark", "Ice", "Steel", "Flying", "Fighting", "Bug"], ["Electric", "Fairy", "Ground", "Ghost", "Poison", "Dragon", "Rock", "Water"]
    ];


    const chess = useRef(new Chess.Chess(whiteElements, blackElements));

    // const chess = useRef(new Chess.Chess());

    // useEffect(() => {
    //     // Update the chess.js instance when the fen prop changes
    //     chess.current.load(fen);
    // }, [fen]);

    const handleMove = (sourceSquare, targetSquare) => {
        console.log("🚀 ~ file: ChessBoardWrapper.jsx:36 ~ handleMove ~ targetSquare:", targetSquare)
        console.log("🚀 ~ file: ChessBoardWrapper.jsx:36 ~ handleMove ~ sourceSquare:", sourceSquare)
        try {
            const move = chess.current.move({
                from: sourceSquare,
                to: targetSquare,
            });
            //chess.current.ascii()
            setFen(chess.current.fen());
            console.log("🚀 ~ file: ChessBoardWrapper.jsx:44 ~ handleMove ~ move:", move)
            if (chess.current.getSEflag()) {

                setSEflag(true)
            } else {
                setSEflag(false)
            }
            console.log('SEflag set to ' + setSEflag)
            return true;
        } catch (e) {
            console.log('SEflag set to ' + setSEflag + 'error\n ' + e)
            return false;
        }
    };

    const handleSkip = () => {
        setSEflag(false)
        chess.current.skipTurn()
        console.log('skip')
    }

    return (
        <>
            <Chessboard
                position={fen}
                onPieceDrop={handleMove}
                boardWidth={boardWidth}
                customLightSquareStyle={{ backgroundColor: lightSquareColor }}
                customDarkSquareStyle={{ backgroundColor: darkSquareColor }}
                customPieces={customPieces(chess.current)}
                customBoardStyle={{
                    borderRadius: "4px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                }}
            />

            {SEflag && <Paper style={{ display: 'flex', justifyContent: 'center' }}><Button variant='contain' onClick={handleSkip}>Skip Move</Button></Paper>}
        </>
    );
};

export default ChessboardWrapper;
