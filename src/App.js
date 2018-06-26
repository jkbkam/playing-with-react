import React, { Component } from 'react';
import './main.css';
import Green from './Green'

class App extends Component {

    state = {
        number : 20
    }

    render() {
    return (
      <div className="yellow">
          {this.state.number}
          <Green number={this.state.number} />
      </div>
    );
  }
}

export default App;
