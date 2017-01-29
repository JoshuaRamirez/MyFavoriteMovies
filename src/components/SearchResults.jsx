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
  }
  componentDidMount(){
    AppBus.Subscribe(this.updateSearchResults).To(Events.Stores.SearchResultsUpdated);
    AppBus.Subscribe(this.updateExistingFavorites).To(Events.Stores.FavoriteMoviesUpdated);
    AppBus.Publish(Actions.LoadInitialFavoriteMovies);
    AppBus.Publish(Actions.LoadExistingSearchResults);
  }
  componentWillUnmount(){
    AppBus.UnSubscribe(this.updateSearchResults).From(Events.Stores.SearchResultsUpdated);
    AppBus.UnSubscribe(this.updateExistingFavorites).From(Events.Stores.FavoriteMoviesUpdated);
  }
  updateExistingFavorites(existingFavorites){
    existingFavorites = existingFavorites.map(
      function(movie){
        return movie.imdbId;
      }
    );
    this.setState({
      existingFavorites: existingFavorites
    });
  }
  updateSearchResults(searchResults) {
    this.setState({
      searchResults: searchResults
    });
  }
  render() {
    const searchResults = this.state.searchResults;
    const existingFavorites = this.state.existingFavorites;
    const doesExist = function(searchResult){
      return existingFavorites.includes(searchResult.imdbId);
    };
    const renderSearchResult = function(movie){
      const key = movie.imdbId;
      const alreadyAdded = doesExist(movie);
      return (
        <div>
          <SearchResult
            alreadyAdded={alreadyAdded}
            movie={movie}
            key={key}
          />
        </div>
      );
    };
    const resultsOrNoResults = function(){
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
