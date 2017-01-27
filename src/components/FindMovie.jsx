import React, { Component } from 'react';

class FindMovie extends Component {
  render() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="findMovie">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title header-margin">Find Movie by Title</h4>
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Movie Title"/>
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-body whitesmoke">
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
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindMovie;
