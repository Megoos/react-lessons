import React, { PureComponent } from 'react';

import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget />
      </div>
    );
  }
}

export default App;
