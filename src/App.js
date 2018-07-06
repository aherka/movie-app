import React, { Component } from 'react';
import MovieContainer from './containers/MovieContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieContainer />
      </div>
    );
  }
}

export default App;
