import React, { Component } from 'react';
import { searchMovie } from '../../servises/fetchApi';
import { Link, withRouter } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidMount() {
    if (this.props.location.query) {
      searchMovie(this.props.location.query).then(movies =>
        this.setState({ movies, query: this.props.location.query }),
      );
    }
  }

  onHandleChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    searchMovie(query).then(movies => this.setState({ movies }));

    this.props.history.push({
      pathname: this.props.match.url,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, query } = this.state;
    const { location } = this.props;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            name="input"
            type="text"
            onChange={this.onHandleChange}
            value={query}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location,
                    query: this.state.query,
                  },
                }}
              >
                <span>{movie.title || movie.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(MoviesPage);
