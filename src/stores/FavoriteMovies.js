import AppBus from "../AppBus";
import Actions from "../Actions";
import Events from "../Events";

const favoriteMovies = function(){

  //Setup Local Storage
  const localStorageKey = "MyFavoriteMovies";
  const existingLocalStorageData = localStorage.getItem(localStorageKey);
  let data = JSON.parse(existingLocalStorageData) || [];
  const updateLocalStorage = function(){
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  //Initial Sample Data
  if (data.length === 0) {
    const independenceDay = {
      "title": "Independence Day",
      "year": "1996",
      "genre": "Action, Adventure, Sci-Fi",
      "actors": "Will Smith, Bill Pullman, Jeff Goldblum, Mary McDonnell",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "imdbRating": "6.9",
      "imdbId": "tt0116629"
    };
    const starWars4 = {
      "title": "Star Wars: Episode IV - A New Hope",
      "year": "1977",
      "genre": "Action, Adventure, Fantasy",
      "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      "imdbRating": "8.7",
      "imdbId": "tt0076759"
    };
    const starWars5 = {
      "title": "Star Wars: Episode V - The Empire Strikes Back",
      "year": "1980",
      "Released": "20 Jun 1980",
      "genre": "Action, Adventure, Fantasy",
      "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
      "imdbRating": "8.8",
      "imdbId": "tt0080684"
    };
    const braveHeart = {
      "title": "Braveheart",
      "year": "1995",
      "genre": "Biography, Drama, History",
      "actors": "James Robinson, Sean Lawlor, Sandy Nelson, James Cosmo",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyNGE1ODQtYTNiNS00ZTUyLThhZjktMTgyOGZkZThlYTc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "imdbRating": "8.4",
      "imdbId": "tt0112573",
    }
    data.push(independenceDay);
    data.push(starWars4);
    data.push(starWars5);
    data.push(braveHeart);
    updateLocalStorage();
  }

  const publish = function(newMovie){
    AppBus.Publish(Events.Stores.FavoriteMoviesUpdated, data);
    if(newMovie) {
      const key = newMovie.imdbId;
      AppBus.Publish(Events.Stores.FavoriteMovieAdded(key), newMovie);
    }
  };

  const removeFavorite = function(imdbId) {
    let isFound = false;
    let indexFound = null;
    data.forEach(function(movie, index){
      if(movie.imdbId === imdbId){
        isFound = true;
        indexFound = index;
      }
      if(isFound){
        data.splice(indexFound, 1);
        isFound = false;
      }
    });
    publish();
    updateLocalStorage();
  };

  const addFavorite = function(movie){
    data.push(movie)
    publish(movie);
    updateLocalStorage();
  };

  const updateFavorite = function(updatedMovie){
    data.forEach(function(movie, index){
      if(movie.imdbId === updatedMovie.imdbId){
        data.splice(index, 1, updatedMovie)
      }
    });
    publish();
    updateLocalStorage();
  };

  AppBus.Subscribe(addFavorite).To(Events.Ajax.MovieDetailsFound);
  AppBus.Subscribe(removeFavorite).To(Actions.RemoveFavoriteMovie);
  AppBus.Subscribe(publish).To(Actions.LoadInitialFavoriteMovies);
  AppBus.Subscribe(updateFavorite).To(Actions.UpdateFavoriteMovie);

};

export default favoriteMovies();
