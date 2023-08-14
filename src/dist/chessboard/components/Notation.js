import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { COLUMNS } from "../consts";
import { useChessboard } from "../context/chessboard-context";
export function Notation({ row, col }) {
    const { boardOrientation, boardWidth, customDarkSquareStyle, customLightSquareStyle, } = useChessboard();
    const whiteColor = customLightSquareStyle.backgroundColor;
    const blackColor = customDarkSquareStyle.backgroundColor;
    const isRow = col === 0;
    const isColumn = row === 7;
    const isBottomLeftSquare = isRow && isColumn;
    function getRow() {
        return boardOrientation === "white" ? 8 - row : row + 1;
    }
    function getColumn() {
        return boardOrientation === "black" ? COLUMNS[7 - col] : COLUMNS[col];
    }
    function renderBottomLeft() {
        return (_jsxs(_Fragment, { children: [_jsx("div", { style: Object.assign(Object.assign({ zIndex: 3, position: "absolute" }, { color: whiteColor }), numericStyle(boardWidth)), children: getRow() }), _jsx("div", { style: Object.assign(Object.assign({ zIndex: 3, position: "absolute" }, { color: whiteColor }), alphaStyle(boardWidth)), children: getColumn() })] }));
    }
    function renderLetters() {
        return (_jsx("div", { style: Object.assign(Object.assign({ userSelect: "none", zIndex: 3, position: "absolute" }, { color: col % 2 !== 0 ? blackColor : whiteColor }), alphaStyle(boardWidth)), children: getColumn() }));
    }
    function renderNumbers() {
        return (_jsx("div", { style: Object.assign(Object.assign({ userSelect: "none", zIndex: 3, position: "absolute" }, (boardOrientation === "black"
                ? { color: row % 2 === 0 ? blackColor : whiteColor }
                : { color: row % 2 === 0 ? blackColor : whiteColor })), numericStyle(boardWidth)), children: getRow() }));
    }
    if (isBottomLeftSquare) {
        return renderBottomLeft();
    }
    if (isColumn) {
        return renderLetters();
    }
    if (isRow) {
        return renderNumbers();
    }
    return null;
}
const alphaStyle = (width) => ({
    alignSelf: "flex-end",
    paddingLeft: width / 8 - width / 48,
    fontSize: width / 48,
});
const numericStyle = (width) => ({
    alignSelf: "flex-start",
    paddingRight: width / 8 - width / 48,
    fontSize: width / 48,
});
