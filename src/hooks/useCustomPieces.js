// ChessPieces.js
import ChessPiece from "../utils/ChessPiece";
// Define a function that returns the object with URLs/paths for the chess piece s
const getChessPieces = () => {
  return {
    wP: "../assets/chesspieces/whitePawn.png",
    wB: "../assets/chesspieces/whiteBishop.png",
    wN: "../assets/chesspieces/whiteKnight.png",
    wR: "../assets/chesspieces/whiteRook.png",
    wQ: "../assets/chesspieces/whiteQueen.png",
    wK: "../assets/chesspieces/whiteKing.png",
    bP: "../assets/chesspieces/blackPawn.png",
    bB: "../assets/chesspieces/blackBishop.png",
    bN: "../assets/chesspieces/blackKnight.png",
    bR: "../assets/chesspieces/blackRook.png",
    bQ: "../assets/chesspieces/blackQueen.png",
    bK: "../assets/chesspieces/blackKing.png",
    // Add more attributes for additional piece types if needed.
  };
};

const pieces = [
  "wP",
  "wN",
  "wB",
  "wR",
  "wQ",
  "wK",
  "bP",
  "bN",
  "bB",
  "bR",
  "bQ",
  "bK",
];
const customPieces = (chess) => {
  const returnPieces = {};
  pieces.map((p, index) => {
    returnPieces[p] = ({ square, squareWidth }) => (
      <div
        style={{
          backgroundImage: `url(${p})`,
          backgroundSize: "100%",
          width: squareWidth,
        }}
      >
        <ChessPiece
          type={chess.current.getPiece(square)?.type}
          color={chess.current.getPiece(square)?.color}
          elementalType={chess.current.getPiece(square)?.element}
        />
      </div>
    );
    return null;
  });
  return returnPieces;
};
export { getChessPieces, customPieces };
