import React, { Component } from 'react';
import { searchMovie } from '../../servises/fetchApi';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movie: {}
  };

  onHandleChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    searchMovie().then(movie => this.setState({ movie }))
  }


  render() {
    const {movie} = this.state
    console.log(movie)

    return (
      <form onSubmit={this.onSubmit}>
        <input name="input" type="text" onChange={this.onHandleChange} value={this.state.query} />
        <button type="submit">Search</button>
      </form>
    );
  }
}
