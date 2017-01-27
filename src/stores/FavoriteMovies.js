import AppBus from "../AppBus";

function favoriteMovies(){

  const data = [];

  const sample = {
    "title": "Independence Day",
    "year": "1996",
    "released": "03 Jul 1996",
    "genre": "Action, Adventure, Sci-Fi",
    "actors": "Will Smith, Bill Pullman, Jeff Goldblum, Mary McDonnell",
    "plot": "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbRating": "6.9"
  };

  data.push(sample);
  data.push(sample);
  data.push(sample);
  data.push(sample);
  data.push(sample);
  data.push(sample);
  data.push(sample);
  data.push(sample);
  data.push(sample);

  return {
    data: data
  };

}

export default favoriteMovies();
