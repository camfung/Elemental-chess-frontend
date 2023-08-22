import React from 'react';


const MoveHistory = (props) => {
  const { chess } = props;
  const moveHistory = chess.current.getMoveHistory().replace(/\n/g, '<br />');
  const packed = chess.current.getPackedHistory()

  return (
    <div>
    <p dangerouslySetInnerHTML={{ __html: moveHistory }} />
    <p packed/>
    </div>
  );
};

export default MoveHistory;
