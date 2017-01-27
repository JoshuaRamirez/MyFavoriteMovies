import React, { Component } from 'react';
import FavoriteMovie from './FavoriteMovie.jsx';

class FavoriteMovies extends Component {
  render() {
    return (
      <div className="row content-margin">
        <FavoriteMovie />
      </div>
    );
  }
}

export default FavoriteMovies;
