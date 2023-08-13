import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { Squares } from "./Squares";
import { Arrows } from "./Arrows";
import { useChessboard } from "../context/chessboard-context";
import { PromotionDialog } from "./PromotionDialog";
import { WhiteKing } from "./ErrorBoundary";
export function Board() {
    const boardRef = useRef(null);
    const { boardWidth, clearCurrentRightClickDown, onPromotionPieceSelect, setShowPromoteDialog, showPromoteDialog, } = useChessboard();
    useEffect(() => {
        function handleClickOutside(event) {
            if (boardRef.current &&
                !boardRef.current.contains(event.target)) {
                clearCurrentRightClickDown();
            }
        }
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, []);
    return boardWidth ? (_jsxs("div", { ref: boardRef, style: { position: "relative" }, children: [_jsx(Squares, {}), _jsx(Arrows, {}), showPromoteDialog && (_jsxs(_Fragment, { children: [_jsx("div", { onClick: () => {
                            setShowPromoteDialog(false);
                            onPromotionPieceSelect === null || onPromotionPieceSelect === void 0 ? void 0 : onPromotionPieceSelect();
                        }, style: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            zIndex: "100",
                            backgroundColor: "rgba(22,21,18,.7)",
                            width: boardWidth,
                            height: boardWidth,
                        } }), _jsx(PromotionDialog, {})] }))] })) : (_jsx(WhiteKing, {}));
}
