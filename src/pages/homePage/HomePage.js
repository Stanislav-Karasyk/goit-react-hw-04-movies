import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../../servises/fetchApi';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getMovies().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <span>{movie.title || movie.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
