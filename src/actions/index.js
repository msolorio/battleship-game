export const CLICK_BOX = 'CLICK_BOX';
export const clickBox = (boxRow, boxCol) => ({
  type: CLICK_BOX,
  boxRow,
  boxCol
});

export const RANDOMLY_PLACE_SHIPS = 'RANDOMLY_PLACE_SHIPS';
export const randomlyPlaceShips = () => ({
  type: RANDOMLY_PLACE_SHIPS
});
