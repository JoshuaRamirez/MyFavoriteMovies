import React, { Component } from 'react';
import Header from './components/Header.jsx';
import FavoriteMovies from './components/FavoriteMovies.jsx';
import FindMovie from './components/FindMovie.jsx';

import "./endpoints/MoviesDirectory";
import "./stores/FavoriteMovies";
import "./stores/SearchResults";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <FindMovie />
          <FavoriteMovies />
        </div>
      </div>
    );
  }
}

export default App;
