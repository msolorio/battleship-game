import React from 'react';
import {connect} from 'react-redux';
import {clickBox} from '../actions';
import './opponentGrid.css';

export function OpponentGrid(props) {

  function onBoxClick(e, rowIndex, colIndex) {
    props.dispatch(clickBox(rowIndex, colIndex));
  }

  function getBoxClassName(value) {
    switch(value) {
      case 0:
        return 'untouched-empty';
      case 1:
        return 'untouched-occupied';
      case 2:
        return 'miss';
      case 3:
        return 'hit';
      default:
        console.error('class name unknown');
    }
  }

  function getColumns(row, rowIndex) {
    return row.map((column, colIndex) => {

      return (
        <span className={`column ${getBoxClassName(column)}`}
          key={colIndex}
          onClick={(e) => onBoxClick(e, rowIndex, colIndex)}>
        </span>
      );
    });
  }

  function getRows() {
    return props.opponentGrid.map((row, rowIndex) => {
      return (
        <div className="row"
          key={rowIndex}>
          {getColumns(row, rowIndex)}
        </div>
      );
    });
  }

  return (
    <div className="OpponentGrid">
      {getRows()}
    </div>
  );
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(OpponentGrid);
