import { Route, Routes, Navigate } from 'react-router';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import NotFound from './components/not-found/NotFound';
import UsersDetails from './pages/users/UserDetails';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UsersDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
