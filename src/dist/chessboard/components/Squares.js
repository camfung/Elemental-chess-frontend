import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { COLUMNS } from "../consts";
import { useChessboard } from "../context/chessboard-context";
import { Notation } from "./Notation";
import { Piece } from "./Piece";
import { Square } from "./Square";
export function Squares() {
    const [squares, setSquares] = useState({});
    const { boardOrientation, boardWidth, currentPosition, customBoardStyle, id, premoves, showBoardNotation, } = useChessboard();
    return (_jsx("div", { "data-boardid": id, style: Object.assign(Object.assign({}, boardStyles(boardWidth)), customBoardStyle), children: [...Array(8)].map((_, r) => {
            return (_jsx("div", { style: {
                    display: "flex",
                    flexWrap: "nowrap",
                    width: boardWidth,
                }, children: [...Array(8)].map((_, c) => {
                    const square = boardOrientation === "black"
                        ? (COLUMNS[7 - c] + (r + 1))
                        : (COLUMNS[c] + (8 - r));
                    const squareColor = c % 2 === r % 2 ? "white" : "black";
                    const squareHasPremove = premoves.find((p) => p.sourceSq === square || p.targetSq === square);
                    const squareHasPremoveTarget = premoves.find((p) => p.targetSq === square);
                    return (_jsxs(Square, { square: square, squareColor: squareColor, setSquares: setSquares, squareHasPremove: !!squareHasPremove, children: [currentPosition[square] && (_jsx(Piece, { piece: currentPosition[square], square: square, squares: squares })), squareHasPremoveTarget && (_jsx(Piece, { isPremovedPiece: true, piece: squareHasPremoveTarget.piece, square: square, squares: squares })), showBoardNotation && _jsx(Notation, { row: r, col: c })] }, `${c}${r}`));
                }) }, r.toString()));
        }) }));
}
const boardStyles = (width) => ({
    cursor: "default",
    height: width,
    width,
});
