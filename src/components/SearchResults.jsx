import React, { Component } from 'react';
import AppBus from '../AppBus';
import Actions from "../Actions";
import Events from "../Events";
import SearchResult from "./SearchResult";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      existingFavorites: []
    };
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.updateExistingFavorites = this.updateExistingFavorites.bind(this);
    this.markAsWaiting = this.markAsWaiting.bind(this);
  }
  componentDidMount(){
    AppBus.Subscribe(this.updateSearchResults).To(Events.Stores.SearchResultsUpdated);
    AppBus.Subscribe(this.updateExistingFavorites).To(Events.Stores.FavoriteMoviesUpdated);
    AppBus.Subscribe(this.markAsWaiting).To(Actions.FindMovies);
    AppBus.Publish(Actions.LoadInitialFavoriteMovies);
    AppBus.Publish(Actions.LoadExistingSearchResults);
  }
  componentWillUnmount(){
    AppBus.UnSubscribe(this.updateSearchResults).From(Events.Stores.SearchResultsUpdated);
    AppBus.UnSubscribe(this.updateExistingFavorites).From(Events.Stores.FavoriteMoviesUpdated);
    AppBus.UnSubscribe(this.markAsWaiting).From(Actions.FindMovies);
  }
  updateExistingFavorites(existingFavorites){
    existingFavorites = existingFavorites.map(
      function(movie) {
        return movie.imdbId;
      }
    );
    this.setState({
      existingFavorites: existingFavorites
    });
  }
  updateSearchResults(searchResults) {
    this.setState({
      searchResults: searchResults,
      isWaiting: false
    });
  }
  markAsWaiting(){
    this.setState({
      isWaiting: true
    });
  }
  render() {
    const searchResults = this.state.searchResults;
    const existingFavorites = this.state.existingFavorites;
    const isWaiting = this.state.isWaiting;
    const doesExist = function(searchResult){
      return existingFavorites.includes(searchResult.imdbId);
    };
    const renderSearchResult = function(movie){
      const key = movie.imdbId;
      const alreadyAdded = doesExist(movie);
      return (
        <SearchResult
          alreadyAdded={alreadyAdded}
          movie={movie}
          key={key}
        />
      );
    };
    const resultsOrNoResults = function(){
      if(isWaiting){
        return (<h3><small>Searching...</small></h3>);
      }
      if(searchResults.length === 0){
        return (<h3><small>0 Results</small></h3>);
      } else {
        return (searchResults.map(renderSearchResult));
      }
    };
    return (
      <div>
        {
          resultsOrNoResults()
        }
      </div>
    );
  }
}

export default SearchResults;
