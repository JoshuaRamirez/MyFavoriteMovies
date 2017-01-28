import request from "superagent";
import AppBus from "../AppBus";
import Events from "../Events";

function MoviesDirectory() {

  const url = "http://www.omdbapi.com/"

  const singleByTitle = function(title){
    const parameters = {
      t: title,
      plot: "long",
      r: "json"
    };
    const callback = function(error, response){
      if(!error){
        AppBus.Publish(Events.Ajax.MovieDetailsFound)
      }
    }
    request.get(url).query(parameters).end(callback);
  };

  const searchByTitle = function(title){
    const parameters = {
      s: title,
      plot: "long",
      r: "json"
    };
    const callback = function(error, response){
      if(!error){
        const data = response.body.Search.map(function(movie){
          return {
            title: movie.Title,
            year: movie.Year,
            imdbId: movie.imdbID,
            poster: movie.Poster
          };
        });
        AppBus.Publish(Events.Ajax.SearchResultsFound, data);
      }
    }
    request.get(url).query(parameters).end(callback);
  };

  return {
    singleByTitle: singleByTitle,
    searchByTitle: searchByTitle
  };

}

export default MoviesDirectory();
