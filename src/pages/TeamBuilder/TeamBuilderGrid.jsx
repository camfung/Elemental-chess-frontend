import { React, useState } from 'react';
import './TeamBuilderGrid.css'; // Create a CSS file (Grid.css) to style the grid
import ChessPiece from '../../utils/ChessPiece'

const TeamBuilderGrid = ({ pieceColor, pieceElementalTypes, handleTeamBuilderGridClick, selectedType }) => {
  const gridSize = { rows: 2, columns: 8 };

  const renderChessPiece = (pieceColor, row, col) => {
    let type = null;

    if (row === 0) {
      type = "Pawn";
    } else if (row === 1) {
      if (col === 0 || col === 7) {
        type = "Rook";
      } else if (col === 1 || col === 6) {
        type = "Knight";
      } else if (col === 2 || col === 5) {
        type = "Bishop";
      } else if ((pieceColor === "black" && col === 3) || (pieceColor === "white" && col === 4)) {
        type = "King";
      } else if ((pieceColor === "black" && col === 4) || (pieceColor === "white" && col === 3)) {
        type = "Queen";
      }
    }

    if (type) {
      return <ChessPiece className={selectedType !== "" ? "selectingType" : ''} onClick={() => handleTeamBuilderGridClick(row, col)} color={pieceColor} elementalType={pieceElementalTypes[row][col]} type={type} />;
    }

    return null;
  };

  const renderSquares = () => {
    const squares = [];


    for (let row = 0; row < gridSize.rows; row++) {
      for (let col = 0; col < gridSize.columns; col++) {
        const isAlternateColor = (row + col) % 2 !== 0;
        const color = !isAlternateColor ? 'alternate-color' : 'default-color';
        squares.push(
          <div key={`${row}-${col}`} className={`square ${color}`}>
            {renderChessPiece(pieceColor, row, col)}
          </div>
        );
      }
    }

    return squares;
  };

  return (
    <div className="grid-container">
      {renderSquares()}
    </div>
  );
};

export default TeamBuilderGrid;
