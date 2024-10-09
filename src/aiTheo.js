const NUM_TILES = 17;

const BOARD_EDGE_COORDS = [9, 9];

function playerIdToColor(id) {
  return (id === 1 ? 1 : -1);
}

function playerColorToId(color) {
  return color === -1 ? 2 : 1;
}

//mesure des dimensions effectives du plateau
function measurePuzzleCoords(tileDimensions, tileCoords) {
  const currPuzzleCoords = [[BOARD_EDGE_COORDS[0], 0], [BOARD_EDGE_COORDS[1], 0]];
  for (let iTile = 0; iTile < NUM_TILES; iTile += 1) {
    const thisTileCoords = tileCoords[iTile];
    const dim = tileDimensions[iTile];
    for (let iDim = 0; iDim < 2; iDim += 1) {
      const fetchedCoord = thisTileCoords[iDim];
      const fetchedDim = dim[iDim];
      const currPuzzleThisDim = currPuzzleCoords[iDim];
      if (fetchedCoord < currPuzzleThisDim[0]) {
        currPuzzleThisDim[0] = fetchedCoord;
      }
      if (fetchedCoord + fetchedDim - 1 > currPuzzleThisDim[1]) {
        currPuzzleThisDim[1] = fetchedCoord + fetchedDim - 1;
      }
    }
  }
  return currPuzzleCoords;
}

//génère un plateau avec le numéro de la tuile sur chaque case
function printTilesOnBoard(tileDimensions, tileCoords, tileBoard) {
  const newTileBoard = tileBoard.map(row => row.slice());
  for (let iTile = 0; iTile < NUM_TILES; iTile += 1) {
    const thisTileCoords = tileCoords[iTile];
    const thisTileDims = tileDimensions[iTile];
    const thisTileY = thisTileCoords[0];
    const thisTileX = thisTileCoords[1];
    for (let y = thisTileY; y < thisTileY + thisTileDims[0]; y += 1) {
      for (let x = thisTileX; x < thisTileX + thisTileDims[1]; x += 1) {
        newTileBoard[y][x] = iTile;
      }
    }
  }
  return newTileBoard;
}

//place un jeton 
function placeStone(stoneBoard, playerId, coords) {
  const newStoneBoard = stoneBoard.map(row => row.slice());
  newStoneBoard[coords[0]][coords[1]] = playerId;
  return newStoneBoard;
}

//calcul les coups légaux
function calcLegalMoves(
  tileBoard,
  puzzleCoords,
  stoneBoard,
  tileCoords,
  tileDimensions,
  turnPlayerLastMove = null,
  opponentLastMove = null
) {
  let firstTurn = true;
  const legalMoves = [];
  if (opponentLastMove == null) {
    for (let iTile = 0; iTile < NUM_TILES; iTile += 1) {
      const thisTileCoords = tileCoords[iTile];
      const thisTileDims = tileDimensions[iTile];
      const thisTileY = thisTileCoords[0];
      const thisTileX = thisTileCoords[1];
      for (let y = thisTileY; y < thisTileY + thisTileDims[0]; y += 1) {
        for (
          let x = thisTileX;
          x < thisTileX + thisTileDims[1];
          x += 1
        ) {
          legalMoves.push([y, x]);
        }
      }
    }
    return legalMoves;
  }
  const opponentLastMoveX = opponentLastMove[1];
  const opponentLastMoveY = opponentLastMove[0];
  if (turnPlayerLastMove != null) {
    var playerLastTile = tileBoard[turnPlayerLastMove[0]][turnPlayerLastMove[1]];
    var playerLastTileCoords = tileCoords[playerLastTile];
    var playerLastTileDims = tileDimensions[playerLastTile];
    var playerLastTileY = playerLastTileCoords[0];
    var playerLastTileX = playerLastTileCoords[1];
    firstTurn = false;
  }
  const opponentLastTile = tileBoard[opponentLastMove[0]][opponentLastMove[1]];
  const opponentLastTileCoords = tileCoords[opponentLastTile];
  const opponentLastTileDims = tileDimensions[opponentLastTile];
  const puzzleCoordsY = puzzleCoords[0];
  const puzzleCoordsX = puzzleCoords[1];
  const opponentLastTileY = opponentLastTileCoords[0];
  const opponentLastTileX = opponentLastTileCoords[1];
  for (
    let y = puzzleCoordsY[0];
    y < puzzleCoordsY[1] + 1;
    y += 1
  ) {
    if (
      stoneBoard[y][opponentLastMoveX] === 0 &&
      tileBoard[y][opponentLastMoveX] !== -1 &&
      (firstTurn ||
        !(
          y >= playerLastTileY &&
          y <= playerLastTileY + playerLastTileDims[0] - 1
        )) &&
      !(
        y >= opponentLastTileY &&
        y <= opponentLastTileY + opponentLastTileDims[0] - 1
      )
    ) {
      legalMoves.push([y, opponentLastMoveX]);
    }
  }
  for (
    let x = puzzleCoordsX[0];
    x < puzzleCoordsX[1] + 1;
    x += 1
  ) {
    if (
      stoneBoard[opponentLastMoveY][x] === 0 &&
      tileBoard[opponentLastMoveY][x] !== -1 &&
      (firstTurn ||
        !(
          x >= playerLastTileX &&
          x <= playerLastTileX + playerLastTileDims[1] - 1
        )) &&
      !(
        x >= opponentLastTileX &&
        x <= opponentLastTileX + opponentLastTileDims[1] - 1
      )
    ) {
      legalMoves.push([opponentLastMoveY, x]);
    }
    }
    return legalMoves;
    }

    
    function updateCountsAndScores(
      stoneCounts,
      scores,
      move,
      tileBoard,
      tileDimensions,
      lastPlayer
    ) {
      const tile = tileBoard[move[0]][move[1]];
      const thisTileDims = tileDimensions[tile];
      const tileWorth = thisTileDims[0] * thisTileDims[1];
      const playerColor = playerIdToColor(lastPlayer);
      if (lastPlayer === 1) {
        stoneCounts[tile] += playerColor;
        if (stoneCounts[tile] === 0) {
          scores[1] -= tileWorth;
        } else if (stoneCounts[tile] === 1) {
          scores[0] += tileWorth;
        }
      } else if (lastPlayer === 2) {
        stoneCounts[tile] -= 1;
        if (stoneCounts[tile] === 0) {
          scores[0] -= tileWorth;
        } else if (stoneCounts[tile] === -1) {
          scores[1] += tileWorth;
        }
      }
      return [stoneCounts, scores];
    }

    // calcul du meilleur coup pour l'IA
    function calcBestMove(
      turnPlayer,
      tileBoard,
      puzzleCoords,
      stoneBoard,
      tileCoords,
      tileDimensions,
      stoneCounts,
      scores,
      turnPlayerLastMove,
      opponentLastMove,
      depth
    ) {
      const playerColor = playerIdToColor(turnPlayer);
      let currScore = -Infinity;
      let bestMove = null;
      for (const move of calcLegalMoves(
        tileBoard,
        puzzleCoords,
        stoneBoard,
        tileCoords,
        tileDimensions,
        turnPlayerLastMove,
        opponentLastMove
      )) {
        const moveScore = calcStateValueRecur(
          -playerColor,
          tileBoard,
          puzzleCoords,
          placeStone(stoneBoard, playerColorToId(playerColor), move),
          tileCoords,
          tileDimensions,
          ...updateCountsAndScores(
            stoneCounts,
            scores,
            move,
            tileBoard,
            tileDimensions,
            playerColorToId(playerColor)
          ),
          move,
          opponentLastMove,
          depth,
          -Infinity,
          Infinity
        );
        if (moveScore > currScore) {
          currScore = moveScore;
          bestMove = move;
        }
      }
      return bestMove;
    }
    // fonction récursive de parcours de l'arbre pour le calcul du meilleur coup
    function calcStateValueRecur(
      playerColor,
      tileBoard,
      puzzleCoords,
      stoneBoard,
      tileCoords,
      tileDimensions,
      stoneCounts,
      scores,
      turnPlayerLastMove,
      opponentLastMove,
      depth,
      alpha,
      beta
    ) {
      const legalMoves = calcLegalMoves(
        tileBoard,
        puzzleCoords,
        stoneBoard,
        tileCoords,
        tileDimensions,
        turnPlayerLastMove,
        opponentLastMove
      );
      if (legalMoves.length === 0) {
        return (scores[0] > scores[1] ? 1 : -1) * Infinity * playerColor;
      }
      if (depth === 0) {
        return (scores[0] - scores[1]) * playerColor;
      }
      let score = -Infinity;
      for (const move of legalMoves) {
        score = Math.max(
          score,
          -calcStateValueRecur(
            -playerColor,
            tileBoard,
            puzzleCoords,
            placeStone(stoneBoard, playerColorToId(playerColor), move),
            tileCoords,
            tileDimensions,
            ...updateCountsAndScores(
              stoneCounts,
              scores,
              move,
              tileBoard,
              tileDimensions,
              playerColorToId(playerColor)
            ),
            opponentLastMove,
            move,
            depth - 1,
            -beta,
            -alpha
          )
        );
        alpha = Math.max(alpha, score);
        if (alpha >= beta) {
          break;
        }
      }
      return score;
    }

//exemple:


const tileBoard = Array(BOARD_EDGE_COORDS[1] + 1).fill(Array(BOARD_EDGE_COORDS[0] + 1).fill(-1));
let stoneBoard = Array(BOARD_EDGE_COORDS[1] + 1).fill(Array(BOARD_EDGE_COORDS[0] + 1).fill(0));

//initialisation
let score = [0, 0];
let stoneCounts = Array(NUM_TILES).fill(0);

//dimensions des tuiles
const tileDimensions = [  [3, 2],
  [2, 2],
  [2, 2],
  [1, 2],
  [3, 1],
  [3, 1],
  [1, 2],
  [2, 3],
  [1, 3],
  [1, 3],
  [2, 3],
  [2, 2],
  [2, 1],
  [2, 2],
  [3, 2],
  [1, 2],
  [2, 2]
];

// coordonées de chaque tuile
const tileCoords = [  [2, 0],
  [1, 2],
  [0, 4],
  [2, 4],
  [1, 6],
  [3, 2],
  [5, 0],
  [3, 3],
  [5, 3],
  [3, 7],
  [4, 6],
  [6, 1],
  [6, 3],
  [6, 4],
  [6, 6],
  [8, 2],
  [8, 4]
];

//initialisation du plateau de tuiles
let board = printTilesOnBoard(tileDimensions, tileCoords, tileBoard);

//calcul des dimensions effectives du plateau avec les tuiles
let puzzleCoords = measurePuzzleCoords(tileDimensions, tileCoords);

//joueur 1 place un jeton en [2,2]
let playerId=1;
let move = [2,2];
stoneBoard = placeStone(stoneBoard, playerId, move);

//mise à jour du nombre de jetons sur chaque tuile, et du score total
let lastPlayer = 1;
[stoneCounts, score] = updateCountsAndScores(stoneCounts, score, move, board, tileDimensions, lastPlayer);

//calcul des coups légaux pour le joueur suivant 
let legalMoves = calcLegalMoves(board, puzzleCoords, stoneBoard, tileCoords, tileDimensions, turnPlayerLastMove = null, opponentLastMove = move);

console.log("legal moves: ", legalMoves);

//niveau de profondeur de l'IA
let depth = 7;

//calcul du meilleur coup
let bestMove = calcBestMove(2, board, puzzleCoords, stoneBoard, tileCoords, tileDimensions, stoneCounts, score, null, move, depth);



console.log("best_move: ",bestMove);