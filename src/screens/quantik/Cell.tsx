import * as React from 'react';
import Piece from './Piece';

import './style/cell.css';

interface ICellProps {
    x: number;
    y: number;
    board: any;
    onCellClick: React.MouseEventHandler<HTMLDivElement>;
}

const Cell: React.FunctionComponent<ICellProps> = (props) => {

  return (
    <div onClick={props.onCellClick} className={`Cell X--${props.x} Y--${props.y}`} >
        {props.board && props.board[props.x][props.y] &&
            <Piece type={props.board[props.x][props.y]!.piece} color={props.board[props.x][props.y]!.color} allowed={false} />
        }
    </div>
  );
};

export default Cell;
