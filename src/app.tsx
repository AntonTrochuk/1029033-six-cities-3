import {Routes, Route} from 'react-router-dom';
import Main from './components/main';
import NotFound from './404';
import {RENTAL_COUNT} from './constants';
import Login from './components/login';
import Favorites from './components/favorites';
import Offer from './components/offer';
import PrivateRoute from './components/private-route';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main rentalCount={RENTAL_COUNT} />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<Offer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
