import React, { Component } from 'react';
import AppBus from '../AppBus';
import SearchResultsStore from "../stores/SearchResults"

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: SearchResultsStore.data
    };
  }
  addMovieClicked(){
    AppBus.Publish("AddMovieRequested", {});
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
                      <img className="img-responsive" src={movie.poster} role="presentation"/>
                  </div>
                </div>
                <div>
                  <h3>{movie.title}</h3>
                  Year: {movie.year}
                </div>
                <br/>
                <button type="button" className="btn btn-primary pull-right block">Select</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default SearchResult;
