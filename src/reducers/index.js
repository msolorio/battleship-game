import * as actions from '../actions';

function O() {
  return Math.ceil(Math.random() * 2) - 1;
}

const initialState = {

  // 0 is untouched-empty
  // 1 is untouched-occupied
  // 2 is miss
  // 3 is hit
  opponentGrid: [
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()],
    [O(), O(), O(), O(), O(), O(), O(), O(), O(), O()]
  ]
}

export const gameReducer = (state=initialState, action) => {


  if (action.type === actions.CLICK_BOX) {
    // 2 is a hit / 1 is a miss
    const grid = state.opponentGrid;

    switch(grid[action.boxRow][action.boxCol]) {
      case 0:
        grid[action.boxRow][action.boxCol] = 2;
        break;
      case 1:
        grid[action.boxRow][action.boxCol] = 3;
        break;
    }

    return Object.assign({}, state, {
      opponentGrid: [...grid]
    });
  }

  return state;
}
