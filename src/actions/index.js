export const CLICK_BOX = 'CLICK_BOX';
export const clickBox = (boxRow, boxCol, boxOccupied) => ({
  type: CLICK_BOX,
  boxRow,
  boxCol,
  boxOccupied
});
