import axios from 'axios';

const keyApi = '65999cd4dc4e9b42ad69f2cfa64d7f94';

const fetchMovies = () => {
    return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${keyApi}`)
    .then(({ data }) => data.results);
};

export { fetchMovies };
