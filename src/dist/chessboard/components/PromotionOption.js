import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useChessboard } from "../context/chessboard-context";
export function PromotionOption({ option }) {
    const [isHover, setIsHover] = useState(false);
    const { boardWidth, chessPieces, customDarkSquareStyle, customLightSquareStyle, handleSetPosition, onPromotionPieceSelect, promoteFromSquare, promoteToSquare, promotionDialogVariant, } = useChessboard();
    const backgroundColor = () => {
        switch (option[1]) {
            case "Q":
                return customDarkSquareStyle.backgroundColor;
            case "R":
                return customLightSquareStyle.backgroundColor;
            case "N":
                return promotionDialogVariant === "default"
                    ? customLightSquareStyle.backgroundColor
                    : customDarkSquareStyle.backgroundColor;
            case "B":
                return promotionDialogVariant === "default"
                    ? customDarkSquareStyle.backgroundColor
                    : customLightSquareStyle.backgroundColor;
        }
    };
    return (_jsx("div", { onClick: () => {
            (onPromotionPieceSelect === null || onPromotionPieceSelect === void 0 ? void 0 : onPromotionPieceSelect.length)
                ? onPromotionPieceSelect(option)
                : handleSetPosition(promoteFromSquare, promoteToSquare, option, true);
        }, onMouseOver: () => setIsHover(true), onMouseOut: () => setIsHover(false), "data-piece": option, style: {
            cursor: "pointer",
            backgroundColor: isHover ? backgroundColor() : `${backgroundColor()}aa`,
            borderRadius: "4px",
            transition: "all 0.1s ease-out",
        }, children: typeof chessPieces[option] === "function" ? (_jsx("div", { style: {
                transition: "all 0.1s ease-out",
                transform: isHover ? "scale(1)" : "scale(0.85)",
            }, children: chessPieces[option]({
                squareWidth: boardWidth / 8,
                isDragging: false,
                square: promoteToSquare,
            }) })) : (_jsx("svg", { viewBox: "1 1 43 43", width: boardWidth / 8, height: boardWidth / 8, style: {
                transition: "all 0.1s ease-out",
                transform: isHover ? "scale(1)" : "scale(0.85)",
            }, children: _jsx("g", { children: chessPieces[option] }) })) }));
}
