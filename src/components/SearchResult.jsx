import React, { Component } from 'react';
import AppBus from '../AppBus';
import Actions from "../Actions";
import Events from "../Events";

const onImageError = function(event){
  event.currentTarget.onerror = "";
  event.currentTarget.src = "http://placehold.it/100x150?text=404";
  return true;
};

class SearchResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      disableAddToFavorites: this.props.alreadyAdded
    };
    this.selected = this.selected.bind(this);
    this.disableAddToFavorites = this.disableAddToFavorites.bind(this);
  }
  componentDidMount(){
    const key = this.props.movie.imdbId;
    AppBus.Subscribe(this.disableAddToFavorites).To(Events.Stores.FavoriteMovieAdded(key));
  }
  componentWillUnmount(){
    const key = this.props.movie.imdbId;
    AppBus.UnSubscribe(this.disableAddToFavorites).From(Events.Stores.FavoriteMovieAdded(key));
  }
  disableAddToFavorites(){
    this.setState({disableAddToFavorites: true});
  }
  selected(){
    AppBus.Publish(Actions.AddFavoriteMovie, this.props.movie.imdbId);
  }
  render() {
    return (
      <div className="well clearfix" key={this.props.movie.imdbId}>
        <div className="pull-left">
          <div className="movieResult thumbnail">
            <img className="img-responsive" src={this.props.movie.poster} role="presentation" onError={onImageError.bind(this)}/>
          </div>
        </div>
        <div>
          <h3>{this.props.movie.title}</h3>
          <div>Year: {this.props.movie.year}</div>
        </div>
        <br/>
        <button disabled={this.state.disableAddToFavorites} onClick={this.selected} type="button" className="btn btn-primary block">Add To Favorites</button>
      </div>
    );
  }
}

export default SearchResult;
