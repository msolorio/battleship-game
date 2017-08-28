import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlayerGrid from './playerGrid';
import OpponentGrid from './opponentGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerGrid/>
        <OpponentGrid/>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(App);
