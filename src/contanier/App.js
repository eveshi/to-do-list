import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    showP: true,
  };

  render() {
    return (
      <div>
        {this.state.showP ?
          <p>test/test</p>
          : null }
        <p>there is music</p>
      </div>
    );
  }
}

export default App;
