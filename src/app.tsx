import {Routes, Route} from 'react-router-dom';
import Main from './components/main';
import NotFound from './components/not-found';
import {RENTAL_COUNT, AppRoute} from './constants';
import Login from './components/login';
import Favorites from './components/favorites';
import Offer from './components/offer';
import PrivateRoute from './components/private-route';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.MAIN} element={<Main rentalCount={RENTAL_COUNT} />} />
      <Route path={AppRoute.LOGIN} element={<Login />} />
      <Route
        path={AppRoute.FAVORITES}
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.OFFER} element={<Offer />} />
      <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
