import React, { Component } from 'react';
import { getMovieDetails } from '../../servises/fetchApi';

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getMovieDetails(movieId).then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        )}
        <ul>
          <li>
            <h2>{movie.title || movie.name}</h2>
          </li>
          <li>
              <span>User Score: {movie.vote_average}</span>
          </li>
          <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
          </li>
          <li>
              <h3>Genres</h3>
              {movie.genres && <p>{movie.genres.map((item)=>(item.name)).join(', ')}</p>}
          </li>
        </ul>
      </div>
    );
  }
}
