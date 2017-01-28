import React, { Component } from 'react';
import AppBus from '../AppBus';
import Events from "../Events";
import SearchResultsStore from "../stores/SearchResults";

const onImageError = function(event){
  event.currentTarget.onerror = "";
  event.currentTarget.src = "http://placehold.it/100x150?text=404";
  return true;
};

class SearchResult extends Component {
  constructor(props) {
    super(props);
    let data = SearchResultsStore.getData();
    this.state = {
      searchResults: data
    };
    this.store = SearchResultsStore;
    this.storeUpdated = this.storeUpdated.bind(this);
    AppBus.Subscribe(this.storeUpdated).To(Events.Stores.SearchResultsUpdated);
  }
  storeUpdated() {
    let data = this.store.getData();
    this.setState({ searchResults: data });
  }
  render() {
    return (
      <div>
        {
          this.state.searchResults.map(function(movie){
            return (
              <div className="well clearfix" key={movie.imdbId}>
                <div className="pull-left">
                  <div className="movieResult thumbnail">
                      <img className="img-responsive" src={movie.poster} role="presentation" onError={onImageError.bind(this)}/>
                  </div>
                </div>
                <div>
                  <h3>{movie.title}</h3>
                  <div>Year: {movie.year}</div>
                </div>
                <br/>
                <button type="button" className="btn btn-primary block">Select</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default SearchResult;
