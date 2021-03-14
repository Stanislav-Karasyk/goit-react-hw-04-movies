import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/homePage/HomePage';
import MovieDetailsPage from '../../pages/movieDetailsPage/MovieDetailsPage';
import MoviesPage from '../../pages/moviesPage/MoviesPage';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Main;
