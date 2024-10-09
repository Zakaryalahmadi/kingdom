import * as React from 'react';
import { useState } from 'react';
import Area from './Area';
import Cell from './Cell';
import { defaultGameState, IGameState } from './gameState';


interface IBoardProps{
    board: any;
}


const Board: React.FunctionComponent<IBoardProps> = ({board}) => {
    const [state, setState] = useState<IGameState>(defaultGameState());


   
    function handleCellClick(x: number, y: number) {
        if(state.board[x][y]) return;

        setState(({
            board: state.board,
            players: state.players,
            turn: state.turn,
            select: { x: x, y: y }
        }));

        console.log(state.select);
    }

    return (
        <div className='Board'>
            <Area id={'1'}>
                <Cell x={0} y={0} board={board} onCellClick={() => handleCellClick(0 ,0)}  />
                <Cell x={1} y={0} board={board} onCellClick={() => handleCellClick(1 ,0)}  />
                <Cell x={0} y={1} board={board} onCellClick={() => handleCellClick(0 ,1)}  />
                <Cell x={1} y={1} board={board} onCellClick={() => handleCellClick(1,1)}  />
            </Area>

            <Area id={'2'}>
                <Cell x={2} y={0} board={board} onCellClick={() => handleCellClick(2, 0)} />
                <Cell x={3} y={0} board={board} onCellClick={() => handleCellClick(3, 0)} />
                <Cell x={2} y={1} board={board} onCellClick={() => handleCellClick(2, 1)} />
                <Cell x={3} y={1} board={board} onCellClick={() => handleCellClick(3, 1)} />
            </Area>


            <Area id={'3'}>
                <Cell x={0} y={2} board={board} onCellClick={() => handleCellClick(0, 2)} />
                <Cell x={0} y={3} board={board} onCellClick={() => handleCellClick(0, 3)} />
                <Cell x={1} y={2} board={board} onCellClick={() => handleCellClick(1, 2)} />
                <Cell x={1} y={3} board={board} onCellClick={() => handleCellClick(1, 3)} />
            </Area>

            <Area id={'4'}>
                <Cell x={2} y={2} board={board} onCellClick={() => handleCellClick(2, 2)} />
                <Cell x={2} y={3} board={board} onCellClick={() => handleCellClick(2, 3)} />
                <Cell x={3} y={2} board={board} onCellClick={() => handleCellClick(3, 2)} />
                <Cell x={3} y={3} board={board} onCellClick={() => handleCellClick(3, 3)} />
            </Area>

            
    
        </div>
    );
};

export default Board;
