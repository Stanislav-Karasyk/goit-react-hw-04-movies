import axios from 'axios';

const keyApi = '65999cd4dc4e9b42ad69f2cfa64d7f94';

const getMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${keyApi}`)
    .then(({ data }) => data.results);
};

const getMovieDetails = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=en-US`,
    )
    .then(({ data }) => data);
};

const getListActors = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${keyApi}&language=en-US`,
    )
    .then(({ data }) => data.cast);
};

const getListReviews = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${keyApi}&language=en-US&page=1`,
    )
    .then(({ data }) => data.results);
};

const searchMovie = (query) => {
    return axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(({ data }) => data.results);
  };



export { getMovies, getMovieDetails, getListActors, getListReviews, searchMovie };
