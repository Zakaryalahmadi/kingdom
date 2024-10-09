import * as React from 'react';
import { PieceType } from './Player';

import './style/piece.css';

interface IPieceProps {
    type: String;
    color: String;
    allowed: boolean;
    onPieceClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Piece: React.FunctionComponent<IPieceProps> = (props) => {
  
  
  return (
    <div onClick={props.onPieceClick} className={`Piece Piece--${props.color} Piece--${props.type} Piece--${props.allowed ? 'allowed': 'notAllowed'}`}></div>
  );
};

export default Piece;
