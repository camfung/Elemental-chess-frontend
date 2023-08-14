import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useChessboard } from "../context/chessboard-context";
export function Piece({ isPremovedPiece = false, piece, square, squares, }) {
    const { animationDuration, arePiecesDraggable, arePremovesAllowed, boardWidth, chessPieces, currentPosition, id, isDraggablePiece, isWaitingForAnimation, onPieceClick, onPieceDragBegin, onPieceDragEnd, positionDifferences, premoves, } = useChessboard();
    const [pieceStyle, setPieceStyle] = useState({
        opacity: 1,
        zIndex: 5,
        touchAction: "none",
        cursor: arePiecesDraggable && isDraggablePiece({ piece, sourceSquare: square })
            ? "-webkit-grab"
            : "default",
    });
    const [{ canDrag, isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "piece",
        item: () => {
            onPieceDragBegin(piece, square);
            return { piece, square, id };
        },
        end: () => onPieceDragEnd(piece, square),
        collect: (monitor) => ({
            canDrag: isDraggablePiece({ piece, sourceSquare: square }),
            isDragging: !!monitor.isDragging(),
        }),
    }), [piece, square, currentPosition, id]);
    // hide the default preview
    dragPreview(getEmptyImage(), { captureDraggingState: true });
    // hide piece on drag
    useEffect(() => {
        setPieceStyle((oldPieceStyle) => (Object.assign(Object.assign({}, oldPieceStyle), { opacity: isDragging ? 0 : 1 })));
    }, [isDragging]);
    // hide piece on matching premoves
    useEffect(() => {
        // if premoves aren't allowed, don't waste time on calculations
        if (!arePremovesAllowed)
            return;
        let hidePiece = false;
        // side effect: if piece moves into pre-moved square, its hidden
        // if there are any premove targets on this square, hide the piece underneath
        if (!isPremovedPiece && premoves.find((p) => p.targetSq === square))
            hidePiece = true;
        // if sourceSq === sq and piece matches then this piece has been pre-moved elsewhere?
        if (premoves.find((p) => p.sourceSq === square && p.piece === piece))
            hidePiece = true;
        // TODO: If a premoved piece returns to a premoved square, it will hide (e1, e2, e1)
        setPieceStyle((oldPieceStyle) => (Object.assign(Object.assign({}, oldPieceStyle), { display: hidePiece ? "none" : "unset" })));
    }, [currentPosition, premoves]);
    // new move has come in
    // if waiting for animation, then animation has started and we can perform animation
    // we need to head towards where we need to go, we are the source, we are heading towards the target
    useEffect(() => {
        var _a;
        const removedPiece = (_a = positionDifferences.removed) === null || _a === void 0 ? void 0 : _a[square];
        // return as null and not loaded yet
        if (!positionDifferences.added)
            return;
        // check if piece matches or if removed piece was a pawn and new square is on 1st or 8th rank (promotion)
        const newSquare = Object.entries(positionDifferences.added).find(([s, p]) => p === removedPiece ||
            ((removedPiece === null || removedPiece === void 0 ? void 0 : removedPiece[1]) === "P" && (s[1] === "1" || s[1] === "8")));
        // we can perform animation if our square was in removed, AND the matching piece is in added AND this isn't a premoved piece
        if (isWaitingForAnimation &&
            removedPiece &&
            newSquare &&
            !isPremovedPiece) {
            const { sourceSq, targetSq } = getSquareCoordinates(square, newSquare[0]);
            if (sourceSq && targetSq) {
                setPieceStyle((oldPieceStyle) => (Object.assign(Object.assign({}, oldPieceStyle), { transform: `translate(${targetSq.x - sourceSq.x}px, ${targetSq.y - sourceSq.y}px)`, transition: `transform ${animationDuration}ms`, zIndex: 6 })));
            }
        }
    }, [positionDifferences]);
    // translate to their own positions (repaint on undo)
    useEffect(() => {
        const { sourceSq } = getSingleSquareCoordinates();
        if (sourceSq) {
            setPieceStyle((oldPieceStyle) => (Object.assign(Object.assign({}, oldPieceStyle), { transform: `translate(${0}px, ${0}px)`, transition: `transform ${0}ms` })));
        }
    }, [currentPosition]);
    // update is piece draggable
    useEffect(() => {
        setPieceStyle((oldPieceStyle) => (Object.assign(Object.assign({}, oldPieceStyle), { cursor: arePiecesDraggable && isDraggablePiece({ piece, sourceSquare: square })
                ? "-webkit-grab"
                : "default" })));
    }, [square, currentPosition, arePiecesDraggable]);
    function getSingleSquareCoordinates() {
        return { sourceSq: squares[square] };
    }
    function getSquareCoordinates(sourceSquare, targetSquare) {
        return {
            sourceSq: squares[sourceSquare],
            targetSq: squares[targetSquare],
        };
    }
    return (_jsx("div", { ref: arePiecesDraggable ? (canDrag ? drag : null) : null, onClick: () => onPieceClick(piece), "data-piece": piece, style: pieceStyle, children: typeof chessPieces[piece] === "function" ? (chessPieces[piece]({
            squareWidth: boardWidth / 8,
            isDragging,
            square,
        })) : (_jsx("svg", { viewBox: "1 1 43 43", width: boardWidth / 8, height: boardWidth / 8, children: _jsx("g", { children: chessPieces[piece] }) })) }));
}
