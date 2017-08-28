import * as actions from '../actions';

const initialState = {

  // 0 is unknown
  // 1 is a miss
  // 2 is a hit
  opponentGrid: [
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
}

export const gameReducer = (state=initialState, action) => {

  if (action.type === actions.CLICK_BOX) {
    // 2 is a hit / 1 is a miss
    const boxStateCode = action.boxOccupied ? 2 : 1;
    const grid = state.opponentGrid;
    grid[action.boxRow][action.boxCol] = boxStateCode;

    return Object.assign({}, state, {
      opponentGrid: [...grid]
    });
  }

  return state;
}
