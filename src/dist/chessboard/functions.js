import { BLACK_COLUMN_VALUES, BLACK_ROWS, COLUMNS, START_POSITION_OBJECT, WHITE_COLUMN_VALUES, WHITE_ROWS, } from "./consts";
/**
 * Retrieves the coordinates at the centre of the requested square, relative to the top left of the board (0, 0).
 */
export function getRelativeCoords(boardOrientation, boardWidth, square) {
    const squareWidth = boardWidth / 8;
    const columns = boardOrientation === "white" ? WHITE_COLUMN_VALUES : BLACK_COLUMN_VALUES;
    const rows = boardOrientation === "white" ? WHITE_ROWS : BLACK_ROWS;
    const x = columns[square[0]] * squareWidth + squareWidth / 2;
    const y = rows[parseInt(square[1], 10) - 1] * squareWidth + squareWidth / 2;
    return { x, y };
}
/**
 * Returns whether the passed position is different from the start position.
 */
export function isDifferentFromStart(newPosition) {
    let isDifferent = false;
    Object.keys(START_POSITION_OBJECT).forEach((square) => {
        if (newPosition[square] !== START_POSITION_OBJECT[square])
            isDifferent = true;
    });
    Object.keys(newPosition).forEach((square) => {
        if (START_POSITION_OBJECT[square] !== newPosition[square])
            isDifferent = true;
    });
    return isDifferent;
}
/**
 * Returns what pieces have been added and what pieces have been removed between board positions.
 */
export function getPositionDifferences(currentPosition, newPosition) {
    const difference = {
        removed: {},
        added: {},
    };
    // removed from current
    Object.keys(currentPosition).forEach((square) => {
        if (newPosition[square] !== currentPosition[square])
            difference.removed[square] = currentPosition[square];
    });
    // added from new
    Object.keys(newPosition).forEach((square) => {
        if (currentPosition[square] !== newPosition[square])
            difference.added[square] = newPosition[square];
    });
    return difference;
}
/**
 * Converts a fen string or existing position object to a position object.
 */
export function convertPositionToObject(position) {
    if (position === "start") {
        return START_POSITION_OBJECT;
    }
    if (typeof position === "string") {
        // attempt to convert fen to position object
        return fenToObj(position);
    }
    return position;
}
/**
 * Converts a fen string to a position object.
 */
function fenToObj(fen) {
    if (!isValidFen(fen))
        return {};
    // cut off any move, castling, etc info from the end. we're only interested in position information
    fen = fen.replace(/ .+$/, "");
    const rows = fen.split("/");
    const position = {};
    let currentRow = 8;
    for (let i = 0; i < 8; i++) {
        const row = rows[i].split("");
        let colIdx = 0;
        // loop through each character in the FEN section
        for (let j = 0; j < row.length; j++) {
            // number / empty squares
            if (row[j].search(/[1-8]/) !== -1) {
                const numEmptySquares = parseInt(row[j], 10);
                colIdx = colIdx + numEmptySquares;
            }
            else {
                // piece
                const square = COLUMNS[colIdx] + currentRow;
                position[square] = fenToPieceCode(row[j]);
                colIdx = colIdx + 1;
            }
        }
        currentRow = currentRow - 1;
    }
    return position;
}
/**
 * Returns whether string is valid fen notation.
 */
function isValidFen(fen) {
    // cut off any move, castling, etc info from the end. we're only interested in position information
    fen = fen.replace(/ .+$/, "");
    // expand the empty square numbers to just 1s
    fen = expandFenEmptySquares(fen);
    // fen should be 8 sections separated by slashes
    const chunks = fen.split("/");
    if (chunks.length !== 8)
        return false;
    // check each section
    for (let i = 0; i < 8; i++) {
        if (chunks[i].length !== 8 || chunks[i].search(/[^kqrnbpKQRNBP1]/) !== -1) {
            return false;
        }
    }
    return true;
}
/**
 * Expand out fen notation to countable characters for validation
 */
function expandFenEmptySquares(fen) {
    return fen
        .replace(/8/g, "11111111")
        .replace(/7/g, "1111111")
        .replace(/6/g, "111111")
        .replace(/5/g, "11111")
        .replace(/4/g, "1111")
        .replace(/3/g, "111")
        .replace(/2/g, "11");
}
/**
 * Convert fen piece code to camel case notation. e.g. bP, wK.
 */
function fenToPieceCode(piece) {
    // black piece
    if (piece.toLowerCase() === piece) {
        return ("b" + piece.toUpperCase());
    }
    // white piece
    return ("w" + piece.toUpperCase());
}
