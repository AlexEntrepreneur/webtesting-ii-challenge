import React, { Component } from 'react';
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

class App extends Component {
  state = {
    balls: 0,
    pitches: 0
  };

  render() {
    return (
      <div className="App">
        <Display
          balls={this.state.balls}
          pitches={this.state.pitches}
        />
        <Dashboard />
      </div>
    );
  }
}

export default App;
