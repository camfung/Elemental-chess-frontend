import React, { useEffect, useRef, useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { customPieces } from '../../hooks/useCustomPieces';

const ChessboardWrapper = (props) => {
    const {
        fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        onMove,
        boardWidth,
        lightSquareColor = "rgb(219, 219, 219)",
        darkSquareColor = 'rgb(202, 0, 0)'
    } = props;

    const chess = useRef(new Chess());

    useEffect(() => {
        // Update the chess.js instance when the fen prop changes
        chess.current.load(fen);
    }, [fen]);

    const handleMove = ({ sourceSquare, targetSquare }) => {
        const move = chess.current.move({
            from: sourceSquare,
            to: targetSquare,
        });

        if (move !== null) {
            // Call the onMove prop with the move object
            onMove(move);
        } else {
            // Handle invalid move
        }
    };

    return (
        <>
            <Chessboard
                position={fen}
                onMovePiece={handleMove}
                boardWidth={boardWidth}
                customLightSquareStyle={{ backgroundColor: lightSquareColor }}
                customDarkSquareStyle={{ backgroundColor: darkSquareColor }}
                customPieces={customPieces()}
                customBoardStyle={{
                    borderRadius: "4px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                }}
            />
        </>
    );
};

export default ChessboardWrapper;
