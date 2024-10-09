import * as React from 'react';
import { useState } from 'react';
// import { defaultGameState, IGameState } from './gameState';
import Board from './Board';
import Player from "./Player";
import { doMove, hasWon, isPieceAllowed } from './gameLogic';
import Piece from './Piece';
import { PieceType } from './Player';
import Area from './Area';
import Cell from './Cell';

import './style/game.css';


export interface IGameState {
  needRestart: boolean;
  board: any;
  players: Player[];
  turn: number;
  select: any;
}

export const defaultGameState = () => ({
  select: false,
  needRestart: false,
  board: [
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false]
  ],
  players: [
    new Player('blanc'),
    new Player('jaune')
  ],
  turn: 0,
  
});




const Quantik: React.FC = () =>{
    const [state, setState] = useState<IGameState>(defaultGameState());
    const [withIa, setWithAi] = useState(true);

    let choiceStyle:any;

    React.useEffect(() =>{
      let choice = document.getElementById('choice');

      choiceStyle = choice?.style;

    })



    let {select, board, players, turn} = state;

    const { x, y } = select;

    const currentPlayer = players[turn%2];
    

    function handleCellClick(x: number, y: number) {
      console.log(choiceStyle.opacity)
      if(choiceStyle.opacity === "0"){
        choiceStyle.opacity = "1";
        // choiceStyle.transform = "translateX(400px)";
    }else{
        choiceStyle.opacity = "1";
        // choiceStyle.display = "block";
        // choiceStyle.transform = "translateX(0)";
    }  

      if(state.board[x][y]) return;

      setState((state: IGameState) => ({
          needRestart: state.needRestart,
          board: state.board,
          players: state.players,
          turn: state.turn,
          select: { x: x, y: y }
      }));

      console.log(state.select);
    }

    function HandlePieceClick (piece: String , i:number) {
      


      
  
      board[x][y] = { piece, color: currentPlayer.color };
      currentPlayer.pieces.splice(i, 1);
      // doMove(board, currentPlayer, piece, x, y);
      setState({
        needRestart: state.needRestart,
        board,
        players: state.players,
        turn: turn + 1,
        select: false
      });


      if (hasWon(board)) {
        
        setState(({
          needRestart:true,
          board,
          players: state.players,
          turn: turn + 1,
          select: false
      }))
        alert(`Bien joué ${currentPlayer.color}!`);

        
        
        console.log(defaultGameState())
        return;
      }


      
  
    }


    return (
        <div className="Game">
          
            <div>
                 
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
            </div>

            

            <div className="Controls">
              
                
              <div className="Choice" id='choice'>
                <div>
                {!state.needRestart && <span className='turn'>le tour du joueur <span style={{color: `${currentPlayer.color === "blanc" ? "white" : "yellow"}` }}>{currentPlayer.color}</span></span>}
                    {!state.needRestart && <p className='pieceType'>Choisissez votre piece :</p>}
                </div>

                {state.needRestart &&
                <button className='reset-btn' onClick={() => {
                  setState(defaultGameState());
                }}>Reset</button>
              }

                {select &&
                  
                  <div className="choiceContent">
                       

                      
                      <div className='choixPieces'>
                        {currentPlayer.pieces.map((piece, i) => {
                          if (!isPieceAllowed(board, x, y, piece, currentPlayer.color))
                            return false;
                          return <Piece key={i} color={currentPlayer.color} type={piece} allowed={true} onPieceClick={() => HandlePieceClick(piece, i) } />
                        })}
                      </div>
                  </div>
                }
              </div>

              
            </div>



          
        </div>




    );
}

export default Quantik;
