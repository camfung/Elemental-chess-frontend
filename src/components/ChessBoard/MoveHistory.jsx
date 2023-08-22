import React from 'react';


const MoveHistory = (props) => {
  const { chess } = props;
  const moveHistory = chess.current.getMoveHistory().replace(/\n/g, '<br />');

  return (
    <p dangerouslySetInnerHTML={{ __html: moveHistory }} />
  );
};

export default MoveHistory;
