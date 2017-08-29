// returns random number between max and min inclusive of both
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// takes in a grid and returns x coordinate and y coordinate for random square
export function getRandomSquare(grid) {
  const gridLength = grid[0].length;
  const gridHeight = grid.length;

  return {
    x: getRandomNumber(0, gridLength - 1),
    y: getRandomNumber(0, gridHeight - 1)
  };
}

// returns a random direct, up, right, down, or left
export function getRandomDirection() {
  switch(getRandomNumber(0, 3)) {
    case 0:
      return 'up';
    case 1:
      return 'right';
    case 2:
      return 'down';
    case 3:
      return 'left';
    default:
      console.error('random direction not found');
  }
};

// takes in square coordinates
// returns a boolean signifying if square is occupied
export function isSquareOccupied(squareCoordinates, grid) {
  if ([0, 2].indexOf(grid[squareCoordinates.y][squareCoordinates.x]) > -1) {
    return false;
  } else if ([1, 3].indexOf(grid[squareCoordinates.y][squareCoordinates.x]) > -1) {
    return true;
  } else console.error('square index not found');
}

// takes in square coordinates
// returns an array of surrounding square coordinates
export function getSurroundingSquares(squareCoordinates, grid) {}

// takes in square coordinates
// returns coordinates for square in given direction
function getAdjecentSquare(squareCoordinates, direction, grid) {
  let newX = squareCoordinates.x;
  let newY = squareCoordinates.y;

  switch(direction) {
    case 'up':
      newY = squareCoordinates.y - 1;
      break;
    case 'right':
      newX = squareCoordinates.x + 1;
      break;
    case 'down':
      newY = squareCoordinates.y + 1;
      break;
    case 'left':
      newX = squareCoordinates.x - 1;
      break;
  }


  return {x: newX, y: newY};
}

// takes in an array of ship coordinates
// returns the grid with ship placed
function placeShipGivenCoords(coordsArray, grid) {
  return coordsArray.reduce((gridAccumulator, coord) => {
    gridAccumulator[coord.y][coord.x] = 1;
    return gridAccumulator;
  }, grid);
}

function isSquareOrSurroundingOccupied(square) {};

// returns a grid with ships placed up to that point
export function randomlyPlaceAShip(shipLength, grid) {
  const newShipCoordinates = [];
  const randomSquare = getRandomSquare(grid);
  newShipCoordinates.push(randomSquare);
  const randomDirection = getRandomDirection();

  let currentSquare = randomSquare;
  for (let i=1, j=shipLength; i<j; i++) {
    let nextSquare = getAdjecentSquare(currentSquare, randomDirection, grid);

    // if next square exists on the board
    // TODO: check if next square is occupied
    // try {
      console.log(nextSquare.x, nextSquare.y);

      if (grid[nextSquare.y] === undefined
      || grid[nextSquare.y][nextSquare.x] === undefined
      || grid[nextSquare.y][nextSquare.x] !== 0) {
        return randomlyPlaceAShip(shipLength, grid);
        // return grid;
        // throw new Error('unable to place ship');
      };

      newShipCoordinates.push(nextSquare);
      currentSquare = nextSquare;
    // }
    // catch(e) {
      // return grid;
    // }
  }

  console.log(newShipCoordinates);

  return placeShipGivenCoords(newShipCoordinates, grid);
};

// returns a grid with ships placed
export function randomlyPlaceShips(shipsArray, grid) {
  return shipsArray.reduce((currentGrid, shipLength) => {
    return randomlyPlaceAShip(shipLength, currentGrid);
  }, grid);
};
