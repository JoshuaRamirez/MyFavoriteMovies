import React, { Component } from 'react';
import AppBus from "../AppBus";
import Actions from "../Actions";
import Events from "../Events";
import FavoriteMovie from './FavoriteMovie.jsx';

class FavoriteMovies extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
    this.update = this.update.bind(this);
    AppBus.Subscribe(this.update).To(Events.Stores.FavoriteMoviesUpdated);
  }
  componentDidMount() {
    AppBus.Publish(Actions.LoadInitialFavoriteMovies);
  }
  update(movies){
    this.setState({
      movies: movies
    });
  }
  render() {
    return (
      <div className="row content-margin">
        {
          this.state.movies.map(function(movie){
            return <FavoriteMovie key={movie.imdbId} movie={movie}/>
          })
        }
      </div>
    );
  }
}

export default FavoriteMovies;
