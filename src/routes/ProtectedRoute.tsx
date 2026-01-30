import { Navigate, Outlet } from 'react-router';
import { isAuthenticated } from '../lib/auth';

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
