import React, { Component } from 'react';
import AppBus from '../AppBus';
import Actions from "../Actions";
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import SearchResults from "./SearchResults";

class FindMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      searchText: ""
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
  }
  componentWillMount() {
    AppBus.Subscribe(this.open).To(Actions.OpenFindMoviesDialog);
  }
  componentWillUnmount() {
    AppBus.UnSubscribe(this.open).From(Actions.OpenFindMoviesDialog);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  onSubmit(event) {
    const searchText = this.state.searchText;
    AppBus.Publish(Actions.FindMovies, searchText);
    event.preventDefault();
  }
  onSearchTextChanged(event) {
    this.setState({searchText: event.target.value});
  }
  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className="header-margin">Find Movie by Title</Modal.Title>
            <div className="form-group">
              <div className="input-group">
                <form onSubmit={this.onSubmit}>
                  <input value={this.state.searchText} onChange={this.onSearchTextChanged} type="text" className="form-control" placeholder="Movie Title"/>
                </form>
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className="whitesmoke">
            <SearchResults />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default FindMovie;
