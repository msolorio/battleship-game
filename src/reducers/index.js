import * as actions from '../actions';
import * as logic from '../logic';

// ships and their lengths
const ships = [1, 1, 1, 1, 2, 2, 3, 3, 4];

const initialState = {

  playerGrid: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  // 0 is untouched-empty
  // 1 is untouched-occupied
  // 2 is miss
  // 3 is hit
  opponentGrid: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

export const gameReducer = (state=initialState, action) => {


  if (action.type === actions.CLICK_BOX) {
    // 0 is untouched-empty
    // 1 is untouched-occupied
    // 2 is miss
    // 3 is hit
    const grid = state.opponentGrid;

    switch(grid[action.boxRow][action.boxCol]) {
      case 0:
        grid[action.boxRow][action.boxCol] = 2;
        break;
      case 1:
        grid[action.boxRow][action.boxCol] = 3;
        break;
      default:
        break;
    }

    return Object.assign({}, state, {
      opponentGrid: [...grid]
    });
  }

  if (action.type === actions.RANDOMLY_PLACE_SHIPS) {

    const gridClone = initialState.opponentGrid.slice(0);
    const opponentGrid = logic.randomlyPlaceShips(ships, gridClone);

    console.log('opponentGrid:', opponentGrid);

    return Object.assign({}, state, {
      opponentGrid
    });
  }

  return state;
}
