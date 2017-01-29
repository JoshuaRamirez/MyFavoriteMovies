import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props){
    super(props);
    props.movie.isReadOnly = true;
    this.state = props.movie;
  }
  render() {
    const isReadOnly = this.state.isReadOnly;
    const renderSaveOrEditButton = function(){
      if (isReadOnly) {
        return (
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
             &nbsp;Edit
          </button>
        );
      } else {
        return (
          <button type="submit" className="btn btn-primary" disabled="disabled">
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
              <div className="col-xs-6">
                <div className="addedMovie thumbnail" href="#">
                    <img className="img-responsive" src={this.state.poster} role="presentation"/>
                </div>
              </div>
              <div className="col-xs-6">
                  <form>
                    <div className="form-group">
                      <label htmlFor="title">Title:</label>
                      <input readOnly={isReadOnly} type="text" value={this.state.title} className="form-control" id="title"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="genre">Genre:</label>
                      <input readOnly={isReadOnly} type="text" value={this.state.genre} className="form-control" id="genre"/>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="form-group">
                          <label htmlFor="genre">Year:</label>
                          <input readOnly={isReadOnly} type="text" value={this.state.year} className="form-control" id="year"/>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="form-group">
                          <label htmlFor="genre">Rating:</label>
                          <input readOnly={isReadOnly} type="text" value={this.state.imdbRating} className="form-control" id="rating"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="genre">Actors:</label>
                      <textarea readOnly={isReadOnly} type="text" className="form-control" rows="3" id="actors" value={this.state.actors}></textarea>
                    </div>
                    {renderSaveOrEditButton()}&nbsp;
                    <button className="btn btn-danger">
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
