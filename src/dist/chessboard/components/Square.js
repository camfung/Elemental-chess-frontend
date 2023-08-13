import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { useChessboard } from "../context/chessboard-context";
export function Square({ square, squareColor, setSquares, squareHasPremove, children, }) {
    const squareRef = useRef(null);
    const { autoPromoteToQueen, boardWidth, boardOrientation, clearArrows, currentPosition, currentRightClickDown, customBoardStyle, customDarkSquareStyle, customDropSquareStyle, customLightSquareStyle, customPremoveDarkSquareStyle, customPremoveLightSquareStyle, customSquare: CustomSquare, customSquareStyles, drawNewArrow, handleSetPosition, isWaitingForAnimation, lastPieceColour, onArrowDrawEnd, onDragOverSquare, onMouseOutSquare, onMouseOverSquare, onPieceDrop, onPromotionCheck, onRightClickDown, onRightClickUp, onSquareClick, setPromoteFromSquare, setPromoteToSquare, setShowPromoteDialog, } = useChessboard();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "piece",
        drop: handleDrop,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [
        square,
        currentPosition,
        onPieceDrop,
        isWaitingForAnimation,
        lastPieceColour,
    ]);
    function handleDrop(item) {
        if (onPromotionCheck(item.square, square, item.piece)) {
            if (autoPromoteToQueen) {
                handleSetPosition(item.square, square, item.piece[0] === "w" ? "wQ" : "bQ");
            }
            else {
                setPromoteFromSquare(item.square);
                setPromoteToSquare(square);
                setShowPromoteDialog(true);
            }
        }
        else {
            handleSetPosition(item.square, square, item.piece, true);
        }
    }
    useEffect(() => {
        if (squareRef.current) {
            const { x, y } = squareRef.current.getBoundingClientRect();
            setSquares((oldSquares) => (Object.assign(Object.assign({}, oldSquares), { [square]: { x, y } })));
        }
    }, [boardWidth, boardOrientation]);
    const defaultSquareStyle = Object.assign(Object.assign(Object.assign(Object.assign({}, borderRadius(square, boardOrientation, customBoardStyle)), (squareColor === "black"
        ? customDarkSquareStyle
        : customLightSquareStyle)), (squareHasPremove &&
        (squareColor === "black"
            ? customPremoveDarkSquareStyle
            : customPremoveLightSquareStyle))), (isOver && customDropSquareStyle));
    return (_jsx("div", { ref: drop, style: defaultSquareStyle, "data-square-color": squareColor, "data-square": square, onMouseOver: (e) => {
            // noop if moving from child of square into square.
            if (e.buttons === 2 && currentRightClickDown) {
                drawNewArrow(currentRightClickDown, square);
            }
            if (e.relatedTarget &&
                e.currentTarget.contains(e.relatedTarget)) {
                return;
            }
            onMouseOverSquare(square);
        }, onMouseOut: (e) => {
            // noop if moving from square into a child of square.
            if (e.relatedTarget &&
                e.currentTarget.contains(e.relatedTarget))
                return;
            onMouseOutSquare(square);
        }, onMouseDown: (e) => {
            if (e.button === 2)
                onRightClickDown(square);
        }, onMouseUp: (e) => {
            if (e.button === 2) {
                if (currentRightClickDown)
                    onArrowDrawEnd(currentRightClickDown, square);
                onRightClickUp(square);
            }
        }, onDragEnter: () => onDragOverSquare(square), onClick: () => {
            onSquareClick(square);
            clearArrows();
        }, onContextMenu: (e) => {
            e.preventDefault();
        }, children: typeof CustomSquare === "string" ? (_jsx(CustomSquare
        // Type is too complex to properly evaluate, so ignore this line.
        // @ts-ignore
        , { 
            // Type is too complex to properly evaluate, so ignore this line.
            // @ts-ignore
            ref: squareRef, style: Object.assign(Object.assign(Object.assign({}, size(boardWidth)), center), (!squareHasPremove && (customSquareStyles === null || customSquareStyles === void 0 ? void 0 : customSquareStyles[square]))), children: children })) : (_jsx(CustomSquare, { ref: squareRef, square: square, squareColor: squareColor, style: Object.assign(Object.assign(Object.assign({}, size(boardWidth)), center), (!squareHasPremove && (customSquareStyles === null || customSquareStyles === void 0 ? void 0 : customSquareStyles[square]))), children: children })) }));
}
const center = {
    display: "flex",
    justifyContent: "center",
};
const size = (width) => ({
    width: width / 8,
    height: width / 8,
});
const borderRadius = (square, boardOrientation, customBoardStyle) => {
    if (!(customBoardStyle === null || customBoardStyle === void 0 ? void 0 : customBoardStyle.borderRadius))
        return {};
    if (square === "a1") {
        return boardOrientation === "white"
            ? { borderBottomLeftRadius: customBoardStyle.borderRadius }
            : { borderTopRightRadius: customBoardStyle.borderRadius };
    }
    if (square === "a8") {
        return boardOrientation === "white"
            ? { borderTopLeftRadius: customBoardStyle.borderRadius }
            : { borderBottomRightRadius: customBoardStyle.borderRadius };
    }
    if (square === "h1") {
        return boardOrientation === "white"
            ? { borderBottomRightRadius: customBoardStyle.borderRadius }
            : { borderTopLeftRadius: customBoardStyle.borderRadius };
    }
    if (square === "h8") {
        return boardOrientation === "white"
            ? { borderTopRightRadius: customBoardStyle.borderRadius }
            : { borderBottomLeftRadius: customBoardStyle.borderRadius };
    }
    return {};
};
