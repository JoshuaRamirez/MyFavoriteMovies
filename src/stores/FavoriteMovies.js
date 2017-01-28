import AppBus from "../AppBus";
import Actions from "../Actions";
import Events from "../Events";

const favoriteMovies = function(){

  let data = [];
  const independenceDay = {
    "title": "Independence Day",
    "year": "1996",
    "genre": "Action, Adventure, Sci-Fi",
    "actors": "Will Smith, Bill Pullman, Jeff Goldblum, Mary McDonnell",
    "plot": "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbRating": "6.9",
    "imdbId": "tt0116629"
  };
  const starWars4 = {
    "title": "Star Wars: Episode IV - A New Hope",
    "year": "1977",
    "genre": "Action, Adventure, Fantasy",
    "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    "plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
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
    "plot": "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "imdbRating": "8.8",
    "imdbId": "tt0080684"
  };
  const braveHeart = {
    "title": "Braveheart",
    "year": "1995",
    "genre": "Biography, Drama, History",
    "actors": "James Robinson, Sean Lawlor, Sandy Nelson, James Cosmo",
    "plot": "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyNGE1ODQtYTNiNS00ZTUyLThhZjktMTgyOGZkZThlYTc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbRating": "8.4",
    "imdbId": "tt0112573",
  }
  data.push(independenceDay);
  data.push(starWars4);
  data.push(starWars5);
  data.push(braveHeart);

  const publish = function(movie){
    AppBus.Publish(Events.Stores.FavoriteMoviesUpdated, data);
    if(movie){
      const key = movie.imdbId;
      AppBus.Publish(Events.Stores.FavoriteMovieAdded(key), movie);
    }
  };

  const addFavorite = function(movie){
    data.push(movie)
    publish(movie);
  };

  AppBus.Subscribe(addFavorite).To(Events.Ajax.MovieDetailsFound);
  AppBus.Subscribe(publish).To(Actions.LoadInitialFavoriteMovies);

}

export default favoriteMovies();
