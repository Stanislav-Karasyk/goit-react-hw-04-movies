import React, { Component } from 'react';
import { fetchMovies } from '../../servises/fetchApi';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMovies().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
          <h1>Trending today</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <span>{movie.title || movie.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
