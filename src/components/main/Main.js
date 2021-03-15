import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() =>
  import('../../pages/homePage/HomePage' /* webpackChunkName: "homePage" */),
);
const MoviesPage = lazy(() =>
  import(
    '../../pages/moviesPage/MoviesPage' /* webpackChunkName: "moviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movieDetailsPage" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    '../../pages/notFoundPage/NotFoundPage' /* webpackChunkName: "notFoundPage" */
  ),
);

const Main = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
