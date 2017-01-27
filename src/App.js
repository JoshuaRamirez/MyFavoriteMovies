import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import FavoriteMovie from './components/FavoriteMovie.jsx';
import FindMovie from './components/FindMovie.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">

          <Header />

          <FindMovie />

          <div className="row content-margin">
            <FavoriteMovie />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
