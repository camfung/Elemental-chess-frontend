import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDragLayer } from "react-dnd";
import { useChessboard } from "../context/chessboard-context";
export function CustomDragLayer() {
    const { boardWidth, chessPieces, id, snapToCursor } = useChessboard();
    const collectedProps = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        clientOffset: monitor.getClientOffset(),
        sourceClientOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }));
    const { isDragging, item, clientOffset, sourceClientOffset, } = collectedProps;
    const getItemStyle = useCallback((clientOffset, sourceClientOffset) => {
        if (!clientOffset || !sourceClientOffset)
            return { display: "none" };
        let { x, y } = snapToCursor ? clientOffset : sourceClientOffset;
        if (snapToCursor) {
            const halfSquareWidth = boardWidth / 8 / 2;
            x -= halfSquareWidth;
            y -= halfSquareWidth;
        }
        const transform = `translate(${x}px, ${y}px)`;
        return {
            transform,
            WebkitTransform: transform,
            touchAction: "none",
        };
    }, [boardWidth, snapToCursor]);
    return isDragging && item.id === id ? (_jsx("div", { style: {
            position: "fixed",
            pointerEvents: "none",
            zIndex: 10,
            left: 0,
            top: 0,
        }, children: _jsx("div", { style: getItemStyle(clientOffset, sourceClientOffset), children: typeof chessPieces[item.piece] === "function" ? (chessPieces[item.piece]({
                squareWidth: boardWidth / 8,
                isDragging: true,
                square: item.square,
            })) : (_jsx("svg", { viewBox: "1 1 43 43", width: boardWidth / 8, height: boardWidth / 8, children: _jsx("g", { children: chessPieces[item.piece] }) })) }) })) : null;
}
