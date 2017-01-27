import React, { Component } from 'react';
import AppBus from '../AppBus';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import SearchResults from "./SearchResults"

class FindMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    AppBus.Subscribe(this.open).To("AddMovieRequested");
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className="header-margin">Find Movie by Title</Modal.Title>
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Movie Title"/>
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
