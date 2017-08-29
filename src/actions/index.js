export const CLICK_BOX = 'CLICK_BOX';
export const clickBox = (boxRow, boxCol) => ({
  type: CLICK_BOX,
  boxRow,
  boxCol
});
