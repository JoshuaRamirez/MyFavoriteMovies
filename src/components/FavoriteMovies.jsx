import React, { Component } from 'react';
import FavoriteMovie from './FavoriteMovie.jsx';
import FavoriteMoviesStore from "../stores/FavoriteMovies";

class FavoriteMovies extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: FavoriteMoviesStore.data
    };
  }
  render() {
    return (
      <div className="row content-margin">
        {
          this.state.movies.map(function(movie){
            return <FavoriteMovie movie={movie}/>
          })
        }
      </div>
    );
  }
}

export default FavoriteMovies;
