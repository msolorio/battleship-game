// returns random number between max and min inclusive of both
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomSquare(grid) {
  const gridLength = grid[0].length;
  const gridHeight = grid.length;

  return {
    x: getRandomNumber(0, gridLength - 1),
    y: getRandomNumber(0, gridHeight - 1)
  };
}

export function getRandomEmptySquare(shipLength, grid, direction) {
  const gridLength = grid[0].length;
  const gridHeight = grid.length;
  let x;
  let y;
  do {
    x = getRandomNumber(0, gridLength - (direction === 'right' ? shipLength : 0) - 1);
    y = getRandomNumber(0, gridHeight - (direction === 'down' ? shipLength : 0) - 1);
  } while (isSquareOccupied({x, y}, grid) === true);

  return {x, y};
}

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

export function getRandomDownOrRight() {
  switch(getRandomNumber(0, 1)) {
    case 0:
      return 'down';
    case 1:
      return 'right';
    default:
      console.error('random direction not found');
  }
}

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

function isSpaceForShipAvailable(startingSquare, shipLength, direction, grid) {
  const y = startingSquare.y;
  const x = startingSquare.x;

  if (direction === 'down') {
    const points = grid.slice(y, y + shipLength).reduce((points, row) => {
      return points + row[x];
    }, 0);
    if (points === 0) return true;
    return false;

  } else if (direction === 'right') {
    const points = grid[y].slice(x, x + shipLength).reduce((points, square) => {
      return points + square;
    });
    if (points === 0) return true;
    return false;
  }
  return new Error('error in isSpaceForShipAvailable');
}

function placeShip(startingSquare, shipLength, direction, grid) {

  if (direction === 'right') {
    for (let i=0, j=shipLength; i<j; i++) {
      grid[startingSquare.y][startingSquare.x + i] = 1;
    }

  } else if (direction === 'down') {
    for (let i=0, j=shipLength; i<j; i++) {
      grid[startingSquare.y + i][startingSquare.x] = 1;
    }
  }

  return grid;
}

// returns a grid up to that point with a ship placed
export function randomlyPlaceAShip(shipLength, grid) {
    let randomSquare;
    let randomDirection;
  do {
    randomDirection = getRandomDownOrRight();
    randomSquare = getRandomEmptySquare(shipLength, grid, randomDirection);
  } while (!isSpaceForShipAvailable(randomSquare, shipLength, randomDirection, grid));

  return placeShip(randomSquare, shipLength, randomDirection, grid);
};

// returns a grid with ships placed
export function randomlyPlaceShips(shipsArray, grid) {
  return shipsArray.reduce((currentGrid, shipLength) => {
    return randomlyPlaceAShip(shipLength, currentGrid);
  }, grid);
};
