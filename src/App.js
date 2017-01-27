import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">

          <Header />

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

          <div className="row content-margin">

            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body whitesmoke">
                <div className="row">

                  <div className="col-xs-6">
                    <div className="addedMovie thumbnail" href="#">
                        <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" role="presentation"/>
                    </div>
                  </div>

                  <div className="col-xs-6">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <input readOnly type="text" value="Some Movie" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Genre:</label>
                          <input readOnly type="text" value="Action" className="form-control" id="genre"/>
                        </div>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Year:</label>
                              <input readOnly type="text" value="2010" className="form-control" id="year"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <label htmlFor="genre">Rating:</label>
                              <input readOnly type="text" value="100" className="form-control" id="rating"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="genre">Actors:</label>
                          <textarea readOnly type="text" className="form-control" rows="3" id="actors" value="Some Actors"></textarea>
                        </div>
                        <button className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                           &nbsp;Edit
                        </button>&nbsp;
                        <button className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                          &nbsp;Delete
                        </button>&nbsp;
                        <button type="submit" className="btn btn-primary" disabled="disabled">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                           &nbsp;Save
                        </button>
                      </form>
                    </div>

                </div>
              </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
