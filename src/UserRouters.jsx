import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/HomePages/Home'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
