import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({children}: {children: ReactNode}) => {
  const isAuthenticated: boolean = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
