import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clickBox, randomlyPlaceShips} from '../actions';
import './opponentGrid.css';

export class OpponentGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(randomlyPlaceShips());
  }

  onBoxClick(e, rowIndex, colIndex) {
    this.props.dispatch(clickBox(rowIndex, colIndex));
  }

  getBoxClassName(value) {
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

  getColumns(row, rowIndex) {
    return row.map((column, colIndex) => {

      return (
        <span className={`column ${this.getBoxClassName(column)}`}
          key={colIndex}
          onClick={(e) => this.onBoxClick(e, rowIndex, colIndex)}>
        </span>
      );
    });
  }

  getRows() {
    return this.props.opponentGrid.map((row, rowIndex) => {
      return (
        <div className="row"
          key={rowIndex}>
          {this.getColumns(row, rowIndex)}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="OpponentGrid">
        {this.getRows()}
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(OpponentGrid);
