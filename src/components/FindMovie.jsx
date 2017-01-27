import React, { Component } from 'react';
import AppBus from '../AppBus';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

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
            <div className="well clearfix">

              <div className="pull-left">
                <div className="movieResult thumbnail">
                    <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                </div>
              </div>

              <div>
                <h3>This is the movie title</h3>
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              </div>
              <br/>
              <button type="button" className="btn btn-primary pull-right block">Select</button>

            </div>
            <div className="well clearfix">

              <div className="pull-left">
                <div className="movieResult thumbnail">
                    <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                </div>
              </div>

              <div>
                <h3>This is the movie title</h3>
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              </div>
              <br/>
              <button type="button" className="btn btn-primary pull-right block">Select</button>

            </div>
            <div className="well clearfix">

              <div className="pull-left">
                <div className="movieResult thumbnail">
                    <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                </div>
              </div>

              <div>
                <h3>This is the movie title</h3>
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              </div>
              <br/>
              <button type="button" className="btn btn-primary pull-right block">Select</button>

            </div>
            <div className="well clearfix">

              <div className="pull-left">
                <div className="movieResult thumbnail">
                    <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                </div>
              </div>

              <div>
                <h3>This is the movie title</h3>
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              </div>
              <br/>
              <button type="button" className="btn btn-primary pull-right block">Select</button>

            </div>
            <div className="well clearfix">

              <div className="pull-left">
                <div className="movieResult thumbnail">
                    <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                </div>
              </div>

              <div>
                <h3>This is the movie title</h3>
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              </div>
              <br/>
              <button type="button" className="btn btn-primary pull-right block">Select</button>

            </div>
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
