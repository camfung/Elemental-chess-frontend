import React from "react";
import { ChessPieceTypes, PokemonTypes, colors } from "./Enums"; // Assuming the enum is named ChessPieceTypes
import typeButton from "../assets/typeButton.png";
import "../pages/TeamBuilder/GridOfButtons.css";
import "./TeamBuilderChessPiece.css";

// Black Pieces
import blackKing from "../assets/chesspieces/blackKing.png";
import blackQueen from "../assets/chesspieces/blackQueen.png";
import blackRook from "../assets/chesspieces/blackRook.png";
import blackBishop from "../assets/chesspieces/blackBishop.png";
import blackKnight from "../assets/chesspieces/blackKnight.png";
import blackPawn from "../assets/chesspieces/blackPawn.png";

// White Pieces
import whiteKing from "../assets/chesspieces/whiteKing.png";
import whiteQueen from "../assets/chesspieces/whiteQueen.png";
import whiteRook from "../assets/chesspieces/whiteRook.png";
import whiteBishop from "../assets/chesspieces/whiteBishop.png";
import whiteKnight from "../assets/chesspieces/whiteKnight.png";
import whitePawn from "../assets/chesspieces/whitePawn.png";

const styles = {
  width: "100%",
};

const ChessPiece = ({
  color,
  type,
  elementalType,
  onClick,
  className,
  square,
}) => {
  let imageSrc;

  if (color === colors.BLACK) {
    switch (type) {
      case ChessPieceTypes.KING:
        imageSrc = blackKing;
        break;
      case ChessPieceTypes.QUEEN:
        imageSrc = blackQueen;
        break;
      case ChessPieceTypes.ROOK:
        imageSrc = blackRook;
        break;
      case ChessPieceTypes.BISHOP:
        imageSrc = blackBishop;
        break;
      case ChessPieceTypes.KNIGHT:
        imageSrc = blackKnight;
        break;
      case ChessPieceTypes.PAWN:
        imageSrc = blackPawn;
        break;
      default:
        // Handle default case
        break;
    }
  } else if (color === colors.WHITE) {
    switch (type) {
      case ChessPieceTypes.KING:
        imageSrc = whiteKing;
        break;
      case ChessPieceTypes.QUEEN:
        imageSrc = whiteQueen;
        break;
      case ChessPieceTypes.ROOK:
        imageSrc = whiteRook;
        break;
      case ChessPieceTypes.BISHOP:
        imageSrc = whiteBishop;
        break;
      case ChessPieceTypes.KNIGHT:
        imageSrc = whiteKnight;
        break;
      case ChessPieceTypes.PAWN:
        imageSrc = whitePawn;
        break;
      default:
        // Handle default case
        break;
    }
  } else {
    // Handle the case for other colors
    // (optional, you might only need black and white)
  }

  return (
    <>
      <div className="wrapper">
        <img style={styles} src={imageSrc} alt={`${color} ${type}`} />
        {elementalType && (
          <button onClick={onClick} className="image-button typeLabelCover">
            <img
              className={`typeLabel ${elementalType} ${className}`}
              src={typeButton}
            />
            <span className="typeText">{elementalType}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default ChessPiece;
