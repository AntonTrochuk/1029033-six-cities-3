import {Navigate} from 'react-router-dom';
import {PrivateRouteType} from '../types';
import {AppRoute} from '../constants';

const PrivateRoute = ({children}: PrivateRouteType) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to={AppRoute.LOGIN} />;
  }

  return children;
};
export default PrivateRoute;
