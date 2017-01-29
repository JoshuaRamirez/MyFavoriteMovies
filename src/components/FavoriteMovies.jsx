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
    this.filterFavorites = this.filterFavorites.bind(this);
  }
  componentDidMount() {
    AppBus.Subscribe(this.update).To(Events.Stores.FavoriteMoviesUpdated);
    AppBus.Subscribe(this.filterFavorites).To(Actions.FilterFavorites);
    AppBus.Publish(Actions.LoadInitialFavoriteMovies);
  }
  componentWillUnmount() {
    AppBus.UnSubscribe(this.update).From(Events.Stores.FavoriteMoviesUpdated);
    AppBus.UnSubscribe(this.filterFavorites).From(Actions.FilterFavorites);
  }
  filterFavorites(filterText){
    if(filterText.length === 0){
      this.setState({isFiltering: false});
      return;
    } else {
      this.setState({isFiltering: true});
    }
    const movies = this.state.movies;
    const fieldsToSearch = [
      "title", "genre", "year", "rating", "actors"
    ];
    const filter = function(text) {
      return movies.filter(function(movie) {
        return Object.keys(movie).some(function(field) {
          if(fieldsToSearch.includes(field)){
            return movie[field].toLowerCase().includes(text.toLowerCase());
          } else {
            return false;
          }
        });
      });
    };
    const results = filter(filterText);
    this.setState({filteredMovies: results});
  }
  update(movies){
    this.setState({
      movies: movies
    });
  }
  render() {
    const self = this;
    const renderAll = function(){
      return self.state.movies.map(function(movie){
        return <FavoriteMovie key={movie.imdbId} movie={movie}/>
      });
    }
    const renderSome = function(){
      return self.state.filteredMovies.map(function(movie){
        return <FavoriteMovie key={movie.imdbId} movie={movie}/>
      });
    }
    const renderAllOrSome = function(){
      if(self.state.isFiltering){
        return renderSome();
      } else {
        return renderAll();
      }
    };
    return (
      <div className="row content-margin">
        {renderAllOrSome()}
      </div>
    );
  }
}

export default FavoriteMovies;
