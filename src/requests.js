const API_KEY = "3e293e77edbe7c457847e8104337baa9";

const requests = [
  `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=213`,
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
];

export const titleList = [
  "Trending",
  "Netflix Originals",
  // "topRated",
  // "actionMovies",
  // "comedyMovies",
  // "horrorMovies",
  // "romanceMovie",
  // "documentaries",
];
export default requests;
