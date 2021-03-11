import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/homePage/HomePage';
import MoviesPage from '../../pages/moviesPage/MoviesPage';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie" component={MoviesPage} />
        {/* <Route path="/:movieId" component={MovieDetailsPage} />
        <Route path="/:movieId/cast" component={CastPage} />
        <Route path="/:movieId/reviews" component={ReviewsPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Main;
