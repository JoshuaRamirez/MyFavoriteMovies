import React, { Component } from 'react';
import AppBus from "../AppBus";
import Actions from "../Actions";

const onImageError = function(event){
  event.currentTarget.onerror = "";
  event.currentTarget.src = "http://placehold.it/100x150?text=404";
  return true;
};

class FavoriteMovie extends Component {
  constructor(props){
    super(props);
    props.movie.isReadOnly = true;
    this.state = props.movie;
    this.onEditClicked = this.onEditClicked.bind(this);
    this.onSaveClicked = this.onSaveClicked.bind(this);
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
  }
  onEditClicked(event){
    event.preventDefault();
    this.setState({isReadOnly: false});
  }
  onSaveClicked(event){
    event.preventDefault();
    this.setState({isReadOnly: true});
  }
  onDeleteClicked(event){
    event.preventDefault();
    this.setState({isReadOnly: true});
    AppBus.Publish(Actions.RemoveFavoriteMovie, this.state.imdbId);
  }
  onInputChanged(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    const isReadOnly = this.state.isReadOnly;
    const self = this;
    const renderSaveOrEditButton = function(){
      if (isReadOnly) {
        return (
          <button onClick={self.onEditClicked} className="btn btn-default">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
             &nbsp;Edit
          </button>
        );
      } else {
        return (
          <button onClick={self.onSaveClicked} type="submit" className="btn btn-primary">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            &nbsp;Save
          </button>
        );
      }
    }
    return (
      <div>
        <div className="col-sm-6 col-xs-12">
          <div className="panel panel-default">
            <div className="panel-body whitesmoke">
            <div className="row">
              <div className="col-xs-5">
                <div className="addedMovie thumbnail" href="#">
                    <img className="img-responsive addedMovie" src={this.state.poster} role="presentation" onError={onImageError.bind(this)}/>
                </div>
              </div>
              <div className="col-xs-7">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input onChange={this.onInputChanged} name="title" readOnly={isReadOnly} type="text" value={this.state.title} className="form-control" id="title"/>
                </div>
                <div className="form-group">
                  <label htmlFor="genre">Genre:</label>
                  <input onChange={this.onInputChanged} name="genre" readOnly={isReadOnly} type="text" value={this.state.genre} className="form-control" id="genre"/>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="genre">Year:</label>
                      <input onChange={this.onInputChanged} name="year" readOnly={isReadOnly} type="text" value={this.state.year} className="form-control" id="year"/>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="genre">Rating:</label>
                      <input onChange={this.onInputChanged} name="imdbRating" readOnly={isReadOnly} type="text" value={this.state.imdbRating} className="form-control" id="rating"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="genre">Actors:</label>
                  <textarea onChange={this.onInputChanged} name="actors" readOnly={isReadOnly} type="text" className="form-control" rows="3" id="actors" value={this.state.actors}></textarea>
                </div>
                <form>
                  {renderSaveOrEditButton()}&nbsp;
                  <button onClick={this.onDeleteClicked} className="btn btn-danger">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    &nbsp;Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteMovie;
