import React, { Component } from 'react';
import { getListReviews } from '../../servises/fetchApi';

export default class ReviewsPage extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getListReviews(movieId).then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.map(review => (
          <li>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
