import React, { Component } from 'react';
import AppBus from '../AppBus';
import Events from "../Events";
import SearchResult from "./SearchResult";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
    this.update = this.update.bind(this);
    this.movieSelected = this.movieSelected.bind(this);
  }
  componentDidMount(){
    AppBus.Subscribe(this.update).To(Events.Stores.SearchResultsUpdated);
  }
  update(searchResults) {
    this.setState({
      searchResults: searchResults
    });
  }
  movieSelected(event) {
    alert("");
  }
  render() {
    return (
      <div>
        {
          this.state.searchResults.map(function(movie){
            return (
              <SearchResult movie={movie} key={movie.imdbId} />
            );
          })
        }
      </div>
    );
  }
}

export default SearchResults;
