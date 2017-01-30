const events = {
  Ajax: {
    MovieDetailsFound: "MovieDetailsFound",
    SearchResultsFound: "SearchResultsFound"
  },
  Stores: {
    SearchResultsUpdated: "SearchResultsUpdated",
    FavoriteMoviesUpdated: "FavoriteMoviesUpdated",
    FavoriteMovieAdded: (key) => "FavoriteMovieAdded-" + key
  }
};

export default events;
