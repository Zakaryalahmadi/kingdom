import Player from './Player'

export const clonePlayer = player => {
    const newPlayer = new Player(player.color);
    newPlayer.pieces = player.pieces.slice();
  
    return newPlayer;
}


export const cloneBoard = board => {
    return [
      board[0].slice(),
      board[1].slice(),
      board[2].slice(),
      board[3].slice()
    ]
}