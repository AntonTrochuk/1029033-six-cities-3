import {Routes, Route} from 'react-router-dom';
import Main from './components/main';
import NotFound from './components/not-found';
import {RENTAL_COUNT, AppRoute} from './constants';
import Login from './components/login';
import Favorites from './components/favorites';
import Offer from './components/offer';
import PrivateRoute from './components/private-route';
import PageLayout from './components/page-layout/PageLayout';

function App() {
  return (
    <Routes>
      <Route
        path={AppRoute.MAIN}
        element={
          <PageLayout divClass="page page--gray page--main" mainClass="page__main page__main--index">
            <Main rentalCount={RENTAL_COUNT} />
          </PageLayout>
        }
      />
      <Route
        path={AppRoute.LOGIN}
        element={
          <PageLayout divClass="page page--gray page--login" mainClass="page__main page__main--login">
            <Login />
          </PageLayout>
        }
      />
      <Route
        path={AppRoute.FAVORITES}
        element={
          <PageLayout divClass="page" mainClass="page__main page__main--favorites">
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          </PageLayout>
        }
      />
      <Route
        path={AppRoute.OFFER}
        element={
          <PageLayout divClass="page" mainClass="page__main page__main--offer">
            <Offer />
          </PageLayout>
        }
      />
      <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
