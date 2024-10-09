import Player, { PieceType } from './Player'
import intersection from 'lodash/intersection';


export const getArea = (x: number, y:number) =>{
    if(x <= 1){
        if(y <= 1) return 1;
        if(y <= 3 && y > 1) return 3;
    }else if(x <= 3 && x >= 2){
        if(y <= 1) return 2;
        if(y <= 3 && y > 1) return 4;
    }
}

export const removePlayerPiece = (player: Player,  piece : String) => {
  let index = 0;

  for (let i = 0; i < player.pieces.length; i++) {
    if (player.pieces[i] === piece) {
      index = i;
      break;
    }
  }

  player.pieces.splice(index, 1);
}

export const doMove = (board: any, player: Player, piece : String, x:number, y:number) => {
  board[x][y] = { piece, color: player.color };
  removePlayerPiece(player, piece);
};

export const isPieceAllowed = (board: any, x:number, y:number, piece : String, color: String) => {
  let i, j;
  const zone = getArea(x, y);
 
  // check coll
  for (j = 0; j <= 3; j++)
    if (board[x][j] && board[x][j].piece === piece && board[x][j].color !== color)
      return false;

  // check zone
  for (i = 0; i <= 3; i++)
  for (j = 0; j <= 3; j++)
    if (board[i][j] && getArea(i, j) === zone && board[i][j].piece === piece && board[i][j].color !== color)
      return false;

  // check row
  for (i = 0; i <= 3; i++)
    if (board[i][y] && board[i][y].piece === piece && board[i][y].color !== color)
      return false;

 

  return true;
}

export const hasWon = (board: any) => {
    let i, j;
    const needed = ['square', 'triangle', 'circle', 'cross'];
  
    // test rows
    for (j = 0; j <= 3; j++) {
      let row = [];
  
      for (i = 0; i <= 3; i++)
        row.push(board[i][j].piece);
  
      if (intersection(row, needed).length === 4)
        return true;
    }
  
    // test cols
    for (i = 0; i <= 3; i++) {
      let col = [];
  
      for (j = 0; j <= 3; j++)
        col.push(board[i][j].piece);
  
      if (intersection(col, needed).length === 4)
        return true;
    }
  
    // test zones
    for (let z = 0; z <= 3; z++) {
      let zone = [];
  
      for (i = 0; i <= 3; i++)
        for (j = 0; j <= 3; j++)
          if (getArea(i, j) === z)
            zone.push(board[i][j].piece);
  
      if (intersection(zone, needed).length === 4)
        return true;
    }
  
    return false;
  }