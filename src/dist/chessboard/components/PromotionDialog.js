import { jsx as _jsx } from "react/jsx-runtime";
import { useChessboard } from "../context/chessboard-context";
import { getRelativeCoords } from "../functions";
import { PromotionOption } from "./PromotionOption";
export function PromotionDialog() {
    const { boardOrientation, boardWidth, promotionDialogVariant, promoteToSquare, } = useChessboard();
    const promotePieceColor = (promoteToSquare === null || promoteToSquare === void 0 ? void 0 : promoteToSquare[1]) === "1" ? "b" : "w";
    const promotionOptions = [
        `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}Q`,
        `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}R`,
        `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}N`,
        `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}B`,
    ];
    const dialogStyles = {
        default: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            transform: `translate(${-boardWidth / 8}px, ${-boardWidth / 8}px)`,
        },
        vertical: {
            transform: `translate(${-boardWidth / 16}px, ${-boardWidth / 16}px)`,
        },
        modal: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `translate(0px, ${(3 * boardWidth) / 8}px)`,
            width: "100%",
            height: `${boardWidth / 4}px`,
            top: 0,
            backgroundColor: "white",
            left: 0,
        },
    };
    const dialogCoords = getRelativeCoords(boardOrientation, boardWidth, promoteToSquare || "a8");
    return (_jsx("div", { style: Object.assign({ position: "absolute", top: `${dialogCoords === null || dialogCoords === void 0 ? void 0 : dialogCoords.y}px`, left: `${dialogCoords === null || dialogCoords === void 0 ? void 0 : dialogCoords.x}px`, zIndex: 1000 }, dialogStyles[promotionDialogVariant]), title: "Choose promotion piece", children: promotionOptions.map((option) => (_jsx(PromotionOption, { option: option }, option))) }));
}
