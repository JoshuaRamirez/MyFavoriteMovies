import React, { Component } from 'react';

class FavoriteMovie extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default FavoriteMovie;
