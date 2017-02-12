import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card/Card';
import CardType from '../src/components/Card/CardType';
import CardNumber from '../src/components/Card/CardNumber';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div>
          <Card type={CardType.SPADES} number={CardNumber.TEN}/>
        </div>

      </div>
    );
  }
}

export default App;
