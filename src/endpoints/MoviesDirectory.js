import request from "superagent";
import AppBus from "../AppBus";
import Events from "../Events";
import Actions from "../Actions";

function MoviesDirectory() {

  const url = "http://www.omdbapi.com/"

  const singleByImdbId = function(imdbId){
    const parameters = {
      i: imdbId,
      plot: "long",
      r: "json"
    };
    const callback = function(error, response){
      if(!error){
        const body = response.body;
        const movie = {
          title: body.Title,
          year: body.Year,
          genre: body.Genre,
          actors: body.Actors,
          plot: body.Plot,
          poster: body.Poster,
          imdbRating: body.imdbRating,
          imdbId: body.imdbID
        };
        AppBus.Publish(Events.Ajax.MovieDetailsFound, movie)
      }
    };
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
        let data = [];
        if(response.body && response.body.Search){
          const searchResults = response.body.Search;
          data = searchResults.map(function(movie){
            return {
              title: movie.Title,
              year: movie.Year,
              imdbId: movie.imdbID,
              poster: movie.Poster
            };
          });
        }
        AppBus.Publish(Events.Ajax.SearchResultsFound, data);
      }
    }
    request.get(url).query(parameters).end(callback);
  };

  AppBus.Subscribe(singleByImdbId).To(Actions.AddFavoriteMovie);
  AppBus.Subscribe(searchByTitle).To(Actions.FindMovies);

}

export default MoviesDirectory();
