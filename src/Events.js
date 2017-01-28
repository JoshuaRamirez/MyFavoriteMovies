const events = {
  Ajax: {
    MovieDetailsFound: "MovieDetailsFound",
    SearchResultsFound: "SearchResultsFound"
  },
  Stores: {
    SearchResultsUpdated: "SearchResultsUpdated",
    FavoriteMoviesUpdated: "FavoriteMoviesUpdated",
    FavoriteMovieAdded: function(key){
      return "FavoriteMovieAdded-" + key
    }
  }
};

export default events;
