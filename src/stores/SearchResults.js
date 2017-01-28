import AppBus from "../AppBus";
import Events from "../Events";

const SearchResults = function(){

  let data = [
    {
      "title": "Independence Day",
      "year": "1996",
      "imdbId": "tt0116629",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "title": "Independence Day: Resurgence",
      "year": "2016",
      "imdbId": "tt1628841",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMTg5MTg4OV5BMl5BanBnXkFtZTgwMzkzMjY5NzE@._V1_SX300.jpg"
    },
    {
      "title": "Independence Day",
      "year": "1997",
      "imdbId": "tt0292014",
      "poster": "http://ia.media-imdb.com/images/M/MV5BMTQ5NTkwMjMyOV5BMl5BanBnXkFtZTcwODk1MTU1MQ@@._V1_SX300.jpg"
    },
    {
      "title": "Independence Day",
      "year": "1983",
      "imdbId": "tt0085724",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyMTU4NTM4N15BMl5BanBnXkFtZTYwNTY3Njg5._V1_SX300.jpg"
    },
    {
      "title": "Independence Day",
      "year": "1994",
      "imdbId": "tt0208227",
      "poster": "http://placehold.it/100x150?text=N/A"
    },
    {
      "title": "Independence Day",
      "year": "1976",
      "imdbId": "tt0073165",
      "poster": "http://placehold.it/100x150?text=N/A"
    },
    {
      "title": "Independence Day 2001",
      "year": "2001",
      "imdbId": "tt1342384",
      "poster": "http://placehold.it/100x150?text=N/A"
    },
    {
      "title": "The Making of 'Independence Day'",
      "year": "1996",
      "imdbId": "tt0361872",
      "poster": "http://placehold.it/100x150?text=N/A"
    },
    {
      "title": "Independence Day: The ID4 Invasion",
      "year": "1996",
      "imdbId": "tt0357791",
      "poster": "http://placehold.it/100x150?text=N/A"
    },
    {
      "title": "Day of Independence",
      "year": "2003",
      "imdbId": "tt0327949",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMTA3NTgzOF5BMl5BanBnXkFtZTgwMTA2NjU0NzE@._V1_SX300.jpg"
    }
  ];

  const publish = function(){
    AppBus.Publish(Events.Stores.SearchResultsUpdated, data);
  };

  const update = function(updatedData) {
    data = updatedData;
    publish();
  };

  AppBus.Subscribe(update).To(Events.Ajax.SearchResultsFound);

}

export default SearchResults();
