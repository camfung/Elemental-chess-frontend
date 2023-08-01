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

// Assuming you have already defined the ChessPiece component
const chessPieceMap = {
  wP: <ChessPiece color="white" type="Pawn" elementalType="Fire" />,
  wR: <ChessPiece color="white" type="Rook" elementalType="Grass" />,
  wN: <ChessPiece color="white" type="Knight" elementalType="Flying" />,
  wB: <ChessPiece color="white" type="Bishop" elementalType="Poison" />,
  wQ: <ChessPiece color="white" type="Queen" elementalType="Electric" />,
  wK: <ChessPiece color="white" type="King" elementalType="Ground" />,

  bP: <ChessPiece color="black" type="Pawn" elementalType="Psychic" />,
  bR: <ChessPiece color="black" type="Rook" elementalType="Ice" />,
  bN: <ChessPiece color="black" type="Knight" elementalType="Bug" />,
  bB: <ChessPiece color="black" type="Bishop" elementalType="Ghost" />,
  bQ: <ChessPiece color="black" type="Queen" elementalType="Steel" />,
  bK: <ChessPiece color="black" type="King" elementalType="Dark" />,
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
const customPieces = (types) => {
  const returnPieces = {};
  pieces.map((p, index) => {
    returnPieces[p] = () => (
      <div
        style={{
          backgroundImage: `url(${p})`,
          backgroundSize: "100%",
        }}
      >
        {chessPieceMap[p]}
      </div>
    );
    return null;
  });
  return returnPieces;
};
export { getChessPieces, customPieces };
