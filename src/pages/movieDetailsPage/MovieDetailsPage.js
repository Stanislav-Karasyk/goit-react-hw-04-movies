import React, { Component } from 'react';
import { getMovieDetails } from '../../servises/fetchApi';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import CastPage from '../../pages/castPage/CastPage';
import ReviewsPage from '../../pages/reviewsPage/ReviewsPage';

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getMovieDetails(movieId).then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {

  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <button type='button' onClick={() => this.props.history.push('/')}>GO BACK</button>
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
            {movie.genres && (
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            )}
          </li>
        </ul>

        <div>
          <ul>
            <li>
              <NavLink
                exact
                to={`${this.props.match.url}/cast`}
                activeClassName="NavLinkActive"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`${this.props.match.url}/reviews`}
                activeClassName="NavLinkActive"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/movies/:movieId/cast" component={CastPage} />
            <Route path="/movies/:movieId/reviews" component={ReviewsPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
