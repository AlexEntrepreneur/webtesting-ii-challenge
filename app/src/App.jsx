import React, { Component } from 'react';
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  componentDidUpdate(prevProps, prevState) {
    const { balls, strikes } = this.state;
    if (balls === 4 || strikes === 3) {
      this.resetBallsAndStrikes();
    }
  }

  resetBallsAndStrikes = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  recordStrike = () => {
    this.setState((currentState) => ({
      strikes: ++currentState.strikes
    }));
  };

  recordBall = () => {
    this.setState((currentState) => ({
      balls: ++currentState.balls
    }));
  };

  recordFoul = () => {
    const strikes = this.state.strikes;

    if (strikes === 0) {
      this.setState({
        strikes: 1
      });
    }
    else if (strikes === 1 || strikes === 2) {
      this.setState({
        strikes: 2
      });
    }
  };

  recordHit = () => {
    this.resetBallsAndStrikes();
  };

  render() {
    return (
      <div className="App">
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
        />
        <Dashboard
          recordStrike={this.recordStrike}
          recordBall={this.recordBall}
          recordFoul={this.recordFoul}
          recordHit={this.recordHit}
        />
      </div>
    );
  }
}

export default App;
