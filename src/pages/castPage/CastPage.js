import React, { Component } from 'react';
import { getListActors } from '../../servises/fetchApi';

export default class CastPage extends Component {
  state = {
    actors: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getListActors(movieId).then(actors => this.setState({ actors }));
  }

  render() {
    const { actors } = this.state;

    return (
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (<img
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.name}
            />)}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
