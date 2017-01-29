import React, { Component } from 'react';
import AppBus from '../AppBus';
import Actions from "../Actions";

class Header extends Component {
  constructor(props){
    super(props);
    this.addMovieClicked = this.addMovieClicked.bind(this);
    this.filterTextChanged = this.filterTextChanged.bind(this);
  }
  addMovieClicked(){
    AppBus.Publish(Actions.OpenFindMoviesDialog);
  }
  filterTextChanged(event){
    const filterText = event.target.value;
    AppBus.Publish(Actions.FilterFavorites, filterText);
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-margin" role="navigation">
        <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">My Favorite Movies</a>
              <button onClick={this.addMovieClicked} type="button" className="btn btn-default navbar-btn" data-toggle="modal" data-target="#findMovie">
                <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                &nbsp;Add Movie
              </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <div className="input-group">
                  <input onChange={this.filterTextChanged} type="text" className="form-control" placeholder="Search My Favorites"/>
                  <div className="input-group-addon"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
