import React, { useEffect, useRef, useState } from 'react';
import * as Chess from '../../chess.mjs';
// import { Chessboard } from 'react-chessboard';
import * as chessboardModule from '../../dist/index.js';
import { customPieces } from '../../hooks/useCustomPieces';
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
    let whiteElements = [
        ["Ice", "Dark", "Bug", "Steel", "Flying", "Fighting", "Fairy", "Electric"], ["Ghost", "Ground", "Dragon", "Poison", "Rock", "Water", "Fire", "Normal"]
    ];


    let blackElements = [
        ["Grass", "Psychic", "Dark", "Ice", "Steel", "Flying", "Fighting", "Bug"], ["Electric", "Fairy", "Ground", "Ghost", "Poison", "Dragon", "Rock", "Water"]
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
            chess.current.ascii()
            setFen(chess.current.fen());
            console.log("🚀 ~ file: ChessBoardWrapper.jsx:44 ~ handleMove ~ move:", move)
            return true;
        } catch (e) {
            return false;
        }
    };

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
        </>
    );
};

export default ChessboardWrapper;
